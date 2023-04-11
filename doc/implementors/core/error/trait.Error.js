(function () {
	var implementors = {
		xadrez: [
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/error/trait.Error.html" title="trait core::error::Error">Error</a> for <a class="enum" href="xadrez/error/enum.ParseFenError.html" title="enum xadrez::error::ParseFenError">ParseFenError</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/error/trait.Error.html" title="trait core::error::Error">Error</a> for <a class="enum" href="xadrez/error/enum.ParseLANError.html" title="enum xadrez::error::ParseLANError">ParseLANError</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/error/trait.Error.html" title="trait core::error::Error">Error</a> for <a class="enum" href="xadrez/error/enum.MoveError.html" title="enum xadrez::error::MoveError">MoveError</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/error/trait.Error.html" title="trait core::error::Error">Error</a> for <a class="enum" href="xadrez/error/enum.SearchError.html" title="enum xadrez::error::SearchError">SearchError</a>'
			]
		]
	};
	if (window.register_implementors) {
		window.register_implementors(implementors);
	} else {
		window.pending_implementors = implementors;
	}
})();
