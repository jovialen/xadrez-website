(function () {
	var implementors = {
		xadrez: [
			[
				'impl <a class="trait" href="https://docs.rs/num-traits/0.2/num_traits/cast/trait.FromPrimitive.html" title="trait num_traits::cast::FromPrimitive">FromPrimitive</a> for <a class="enum" href="xadrez/piece/enum.PieceKind.html" title="enum xadrez::piece::PieceKind">PieceKind</a>'
			],
			[
				'impl <a class="trait" href="https://docs.rs/num-traits/0.2/num_traits/cast/trait.FromPrimitive.html" title="trait num_traits::cast::FromPrimitive">FromPrimitive</a> for <a class="enum" href="xadrez/square/enum.Square.html" title="enum xadrez::square::Square">Square</a>'
			]
		]
	};
	if (window.register_implementors) {
		window.register_implementors(implementors);
	} else {
		window.pending_implementors = implementors;
	}
})();
