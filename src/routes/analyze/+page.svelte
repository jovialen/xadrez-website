<script>
  import ChessboardSection from '../../components/sections/chessboard-section.svelte';
	import { title } from '../../stores.js';

	title.page('Analyze');
</script>

<ChessboardSection analyze={true} />
