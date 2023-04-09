(function () {
	var implementors = {
		xadrez: [
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/convert/trait.TryFrom.html" title="trait core::convert::TryFrom">TryFrom</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/1.66.0/std/primitive.char.html">char</a>&gt; for <a class="struct" href="xadrez/piece/struct.Piece.html" title="struct xadrez::piece::Piece">Piece</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/convert/trait.TryFrom.html" title="trait core::convert::TryFrom">TryFrom</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/1.66.0/std/primitive.usize.html">usize</a>&gt; for <a class="enum" href="xadrez/piece/enum.PieceKind.html" title="enum xadrez::piece::PieceKind">PieceKind</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/convert/trait.TryFrom.html" title="trait core::convert::TryFrom">TryFrom</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/1.66.0/std/primitive.isize.html">isize</a>&gt; for <a class="enum" href="xadrez/piece/enum.PieceKind.html" title="enum xadrez::piece::PieceKind">PieceKind</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/convert/trait.TryFrom.html" title="trait core::convert::TryFrom">TryFrom</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/1.66.0/std/primitive.char.html">char</a>&gt; for <a class="enum" href="xadrez/piece/enum.PieceKind.html" title="enum xadrez::piece::PieceKind">PieceKind</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/convert/trait.TryFrom.html" title="trait core::convert::TryFrom">TryFrom</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/1.66.0/std/primitive.usize.html">usize</a>&gt; for <a class="enum" href="xadrez/square/enum.Square.html" title="enum xadrez::square::Square">Square</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/convert/trait.TryFrom.html" title="trait core::convert::TryFrom">TryFrom</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/1.66.0/std/primitive.isize.html">isize</a>&gt; for <a class="enum" href="xadrez/square/enum.Square.html" title="enum xadrez::square::Square">Square</a>'
			]
		]
	};
	if (window.register_implementors) {
		window.register_implementors(implementors);
	} else {
		window.pending_implementors = implementors;
	}
})();
