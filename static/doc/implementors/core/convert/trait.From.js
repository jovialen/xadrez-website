(function () {
	var implementors = {
		xadrez: [
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/convert/trait.From.html" title="trait core::convert::From">From</a>&lt;<a class="struct" href="https://doc.rust-lang.org/1.66.0/core/num/error/struct.ParseIntError.html" title="struct core::num::error::ParseIntError">ParseIntError</a>&gt; for <a class="enum" href="xadrez/error/enum.ParseFenError.html" title="enum xadrez::error::ParseFenError">ParseFenError</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/convert/trait.From.html" title="trait core::convert::From">From</a>&lt;<a class="primitive" href="https://doc.rust-lang.org/1.66.0/std/primitive.char.html">char</a>&gt; for <a class="enum" href="xadrez/piece/enum.Side.html" title="enum xadrez::piece::Side">Side</a>'
			],
			[
				'impl <a class="trait" href="https://doc.rust-lang.org/1.66.0/core/convert/trait.From.html" title="trait core::convert::From">From</a>&lt;<a class="enum" href="xadrez/square/enum.Square.html" title="enum xadrez::square::Square">Square</a>&gt; for <a class="primitive" href="https://doc.rust-lang.org/1.66.0/std/primitive.usize.html">usize</a>'
			]
		]
	};
	if (window.register_implementors) {
		window.register_implementors(implementors);
	} else {
		window.pending_implementors = implementors;
	}
})();
