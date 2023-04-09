(function () {
	var implementors = {
		xadrez: [
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="struct" href="xadrez/board/struct.Chessboard.html" title="struct xadrez::board::Chessboard">Chessboard</a>',
				1,
				['xadrez::board::Chessboard']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="enum" href="xadrez/board/enum.GameState.html" title="enum xadrez::board::GameState">GameState</a>',
				1,
				['xadrez::board::GameState']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="enum" href="xadrez/board/enum.DrawReason.html" title="enum xadrez::board::DrawReason">DrawReason</a>',
				1,
				['xadrez::board::DrawReason']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="struct" href="xadrez/builder/struct.BoardBuilder.html" title="struct xadrez::builder::BoardBuilder">BoardBuilder</a>',
				1,
				['xadrez::builder::BoardBuilder']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="enum" href="xadrez/error/enum.ParseFenError.html" title="enum xadrez::error::ParseFenError">ParseFenError</a>',
				1,
				['xadrez::error::ParseFenError']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="enum" href="xadrez/error/enum.ParseLANError.html" title="enum xadrez::error::ParseLANError">ParseLANError</a>',
				1,
				['xadrez::error::ParseLANError']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="enum" href="xadrez/error/enum.MoveError.html" title="enum xadrez::error::MoveError">MoveError</a>',
				1,
				['xadrez::error::MoveError']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="enum" href="xadrez/error/enum.SearchError.html" title="enum xadrez::error::SearchError">SearchError</a>',
				1,
				['xadrez::error::SearchError']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="struct" href="xadrez/evaluation/score/struct.Score.html" title="struct xadrez::evaluation::score::Score">Score</a>',
				1,
				['xadrez::evaluation::score::Score']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="enum" href="xadrez/evaluation/score/enum.PositionPrediction.html" title="enum xadrez::evaluation::score::PositionPrediction">PositionPrediction</a>',
				1,
				['xadrez::evaluation::score::PositionPrediction']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="struct" href="xadrez/move/struct.Move.html" title="struct xadrez::move::Move">Move</a>',
				1,
				['xadrez::move::Move']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="struct" href="xadrez/piece/struct.Piece.html" title="struct xadrez::piece::Piece">Piece</a>',
				1,
				['xadrez::piece::Piece']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="enum" href="xadrez/piece/enum.Side.html" title="enum xadrez::piece::Side">Side</a>',
				1,
				['xadrez::piece::Side']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="enum" href="xadrez/piece/enum.PieceKind.html" title="enum xadrez::piece::PieceKind">PieceKind</a>',
				1,
				['xadrez::piece::PieceKind']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="struct" href="xadrez/search/struct.SearchLimits.html" title="struct xadrez::search::SearchLimits">SearchLimits</a>',
				1,
				['xadrez::search::SearchLimits']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="struct" href="xadrez/search/struct.SearchData.html" title="struct xadrez::search::SearchData">SearchData</a>',
				1,
				['xadrez::search::SearchData']
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> for <a class="enum" href="xadrez/square/enum.Square.html" title="enum xadrez::square::Square">Square</a>',
				1,
				['xadrez::square::Square']
			]
		]
	};
	if (window.register_implementors) {
		window.register_implementors(implementors);
	} else {
		window.pending_implementors = implementors;
	}
})();
