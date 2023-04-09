<script>
	import Highlight from 'svelte-highlight/Highlight.svelte';
	import javascript from 'svelte-highlight/languages/javascript';
	import rust from 'svelte-highlight/languages/rust';
	import 'svelte-highlight/styles/github-dark-dimmed.css';

	import { title } from '../stores.js';
	import IntLink from '../components/internal-link.svelte';
	import SecondaryIconButton from '../components/button/secondary-icon.svelte';
	import Chessboard from '../components/chessboard/chessboard.svelte';
	import Hero from '../components/sections/hero.svelte';
	import InfoSection from '../components/sections/info-section.svelte';

	title.empty();

	const negamax_pseudocode = `function negaMax(chessboard, depth) {
	if (depth === 0) {
		return evaluate(chessboard);
	}

	let max = -Infinity;
	let moves = findLegalMoves(chessboard);
	for (move in moves) {
		makeMove(chessboard, move);
		let score = -negaMax(chessboard, depth - 1);
		undoMove(chessboard, move);

		if (score > max) {
			max = score;
		}
	}

	return max;
}`;

	const usage_code = `use xadrez::prelude::*;

fn main() {
	let mut board = Chessboard::default();

	let evaluation = board.evaluate();
	let best_move = board.search(SearchLimits::from_depth(2)).0;

	board.make_move(best_move);
	
	let e7e5 = Move::from_str("e7e5").unwrap();
	board.make_move(e7e5);

	let pieces = board.pieces();

	println!("{board}: {}", board.game_state());
}`;
</script>

<section>
	<Hero>
		<div class="text-white text-center space-y-4 px-4 md:px-2">
			<h1 class="text-6xl">XADREZ</h1>
			<p>A slightly better chess player than its creator.</p>
		</div>
	</Hero>
</section>

<section class="my-2 px-4 md:px-2">
	<div class="container mx-auto flex flex-col md:flex-row justify-center gap-2 items-center">
		<IntLink href="/play"
			><SecondaryIconButton icon="fa-chess">Challange me</SecondaryIconButton></IntLink
		>
		or
		<IntLink href="/docs"
			><SecondaryIconButton icon="fa-book">See how to use me</SecondaryIconButton></IntLink
		>
	</div>
</section>

<section class="px-4 md:px-2">
	<InfoSection>
		<div slot="header">What am I?</div>
		<div slot="info">
			I am a chess engine. That means that I can find all legal moves on a chessboard, evaluate how
			good positions on the board are, and find what I think are the best moves. You can play
			against me here in the browser, or have me help you with a game by seeing how I think. You can
			even use me in your own projects!
		</div>
		<div slot="compliment" class="w-full mx-auto md:w-96">
			<IntLink href="/play">
				<Chessboard draggable={false} />
			</IntLink>
		</div>
	</InfoSection>
</section>

<section class="px-4 md:px-2">
	<InfoSection reverse={true}>
		<div slot="header">How do I work?</div>
		<div slot="info">
			I find the best moves by using an algorithm called <b>negamax alpha-beta search</b>. By making
			every possible move from the current position, I can evaluate all the positions one move into
			the future, and find the best one. Then, I make every possible move after the first one, and
			find the best possible position two moves into the future. I continue to do this, looking as
			far into the future as I can, and find out what move I need to make to get to the best
			position for me. Sounds complicated? The code
			<span class="hidden md:inline">to the left</span>
			<span class="inline md:hidden">below</span> is all the code for it!
		</div>
		<div slot="compliment" class="w-full overflow-hidden rounded-lg md:w-auto md:min-w-[24rem]">
			<Highlight language={javascript} code={negamax_pseudocode} />
		</div>
	</InfoSection>
</section>

<section class="px-4 md:px-2 py-4">
	<InfoSection>
		<div slot="header">How can you use me?</div>
		<div slot="info">
			To use me yourself, go to my GitHub repository, download me, and add me to your project. You
			can see an example on how to use me in code <span class="hidden md:inline">to the right</span>
			<span class="inline md:hidden">below</span>
		</div>
		<div slot="compliment" class="w-full overflow-hidden rounded-lg md:w-auto md:min-w-[24rem]">
			<Highlight language={rust} code={usage_code} />
		</div>
	</InfoSection>
</section>
