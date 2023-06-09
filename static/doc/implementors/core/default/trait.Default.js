(function () {
	var implementors = {
		xadrez: [
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html" title="trait core::default::Default">Default</a> for <a class="struct" href="xadrez/board/struct.Chessboard.html" title="struct xadrez::board::Chessboard">Chessboard</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html" title="trait core::default::Default">Default</a> for <a class="struct" href="xadrez/builder/struct.BoardBuilder.html" title="struct xadrez::builder::BoardBuilder">BoardBuilder</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html" title="trait core::default::Default">Default</a> for <a class="struct" href="xadrez/evaluation/score/struct.Score.html" title="struct xadrez::evaluation::score::Score">Score</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html" title="trait core::default::Default">Default</a> for <a class="struct" href="xadrez/search/struct.SearchLimits.html" title="struct xadrez::search::SearchLimits">SearchLimits</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/default/trait.Default.html" title="trait core::default::Default">Default</a> for <a class="struct" href="xadrez/search/struct.SearchData.html" title="struct xadrez::search::SearchData">SearchData</a>'
			]
		]
	};
	if (window.register_implementors) {
		window.register_implementors(implementors);
	} else {
		window.pending_implementors = implementors;
	}
})();
