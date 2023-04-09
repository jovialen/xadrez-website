'use strict';
const darkThemes = ['dark', 'ayu'];
window.currentTheme = document.getElementById('themeStyle');
window.mainTheme = document.getElementById('mainThemeStyle');
window.RUSTDOC_MOBILE_BREAKPOINT = 700;
const settingsDataset = (function () {
	const settingsElement = document.getElementById('default-settings');
	if (settingsElement === null) {
		return null;
	}
	const dataset = settingsElement.dataset;
	if (dataset === undefined) {
		return null;
	}
	return dataset;
})();
function getSettingValue(settingName) {
	const current = getCurrentValue(settingName);
	if (current !== null) {
		return current;
	}
	if (settingsDataset !== null) {
		const def = settingsDataset[settingName.replace(/-/g, '_')];
		if (def !== undefined) {
			return def;
		}
	}
	return null;
}
const localStoredTheme = getSettingValue('theme');
const savedHref = [];
function hasClass(elem, className) {
	return elem && elem.classList && elem.classList.contains(className);
}
function addClass(elem, className) {
	if (!elem || !elem.classList) {
		return;
	}
	elem.classList.add(className);
}
function removeClass(elem, className) {
	if (!elem || !elem.classList) {
		return;
	}
	elem.classList.remove(className);
}
function onEach(arr, func, reversed) {
	if (arr && arr.length > 0 && func) {
		if (reversed) {
			const length = arr.length;
			for (let i = length - 1; i >= 0; --i) {
				if (func(arr[i])) {
					return true;
				}
			}
		} else {
			for (const elem of arr) {
				if (func(elem)) {
					return true;
				}
			}
		}
	}
	return false;
}
function onEachLazy(lazyArray, func, reversed) {
	return onEach(Array.prototype.slice.call(lazyArray), func, reversed);
}
function updateLocalStorage(name, value) {
	try {
		window.localStorage.setItem('rustdoc-' + name, value);
	} catch (e) {}
}
function getCurrentValue(name) {
	try {
		return window.localStorage.getItem('rustdoc-' + name);
	} catch (e) {
		return null;
	}
}
function switchTheme(styleElem, mainStyleElem, newTheme, saveTheme) {
	const newHref = mainStyleElem.href.replace(
		/\/rustdoc([^/]*)\.css/,
		'/' + newTheme + '$1' + '.css'
	);
	if (saveTheme) {
		updateLocalStorage('theme', newTheme);
	}
	if (styleElem.href === newHref) {
		return;
	}
	let found = false;
	if (savedHref.length === 0) {
		onEachLazy(document.getElementsByTagName('link'), (el) => {
			savedHref.push(el.href);
		});
	}
	onEach(savedHref, (el) => {
		if (el === newHref) {
			found = true;
			return true;
		}
	});
	if (found) {
		styleElem.href = newHref;
	}
}
function useSystemTheme(value) {
	if (value === undefined) {
		value = true;
	}
	updateLocalStorage('use-system-theme', value);
	const toggle = document.getElementById('use-system-theme');
	if (toggle && toggle instanceof HTMLInputElement) {
		toggle.checked = value;
	}
}
const updateSystemTheme = (function () {
	if (!window.matchMedia) {
		return () => {
			const cssTheme = getComputedStyle(document.documentElement).getPropertyValue('content');
			switchTheme(window.currentTheme, window.mainTheme, JSON.parse(cssTheme) || 'light', true);
		};
	}
	const mql = window.matchMedia('(prefers-color-scheme: dark)');
	function handlePreferenceChange(mql) {
		const use = (theme) => {
			switchTheme(window.currentTheme, window.mainTheme, theme, true);
		};
		if (getSettingValue('use-system-theme') !== 'false') {
			const lightTheme = getSettingValue('preferred-light-theme') || 'light';
			const darkTheme = getSettingValue('preferred-dark-theme') || 'dark';
			if (mql.matches) {
				use(darkTheme);
			} else {
				use(lightTheme);
			}
		} else {
			use(getSettingValue('theme'));
		}
	}
	mql.addListener(handlePreferenceChange);
	return () => {
		handlePreferenceChange(mql);
	};
})();
function switchToSavedTheme() {
	switchTheme(window.currentTheme, window.mainTheme, getSettingValue('theme') || 'light', false);
}
if (getSettingValue('use-system-theme') !== 'false' && window.matchMedia) {
	if (
		getSettingValue('use-system-theme') === null &&
		getSettingValue('preferred-dark-theme') === null &&
		darkThemes.indexOf(localStoredTheme) >= 0
	) {
		updateLocalStorage('preferred-dark-theme', localStoredTheme);
	}
	updateSystemTheme();
} else {
	switchToSavedTheme();
}
if (getSettingValue('source-sidebar-show') === 'true') {
	addClass(document.documentElement, 'source-sidebar-expanded');
}
window.addEventListener('pageshow', (ev) => {
	if (ev.persisted) {
		setTimeout(switchToSavedTheme, 0);
	}
});
