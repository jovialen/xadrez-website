(function () {
	var implementors = {
		xadrez: [
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/str/traits/trait.FromStr.html" title="trait core::str::traits::FromStr">FromStr</a> for <a class="struct" href="xadrez/move/struct.Move.html" title="struct xadrez::move::Move">Move</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/str/traits/trait.FromStr.html" title="trait core::str::traits::FromStr">FromStr</a> for <a class="enum" href="xadrez/square/enum.Square.html" title="enum xadrez::square::Square">Square</a>'
			]
		]
	};
	if (window.register_implementors) {
		window.register_implementors(implementors);
	} else {
		window.pending_implementors = implementors;
	}
})();
