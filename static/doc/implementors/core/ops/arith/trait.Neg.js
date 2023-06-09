(function () {
	var implementors = {
		xadrez: [
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/ops/arith/trait.Neg.html" title="trait core::ops::arith::Neg">Neg</a> for <a class="struct" href="xadrez/evaluation/score/struct.Score.html" title="struct xadrez::evaluation::score::Score">Score</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/ops/arith/trait.Neg.html" title="trait core::ops::arith::Neg">Neg</a> for <a class="enum" href="xadrez/evaluation/score/enum.PositionPrediction.html" title="enum xadrez::evaluation::score::PositionPrediction">PositionPrediction</a>'
			]
		]
	};
	if (window.register_implementors) {
		window.register_implementors(implementors);
	} else {
		window.pending_implementors = implementors;
	}
})();
