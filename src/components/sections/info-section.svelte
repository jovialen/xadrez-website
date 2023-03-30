<script>
	export let reverse = false;
</script>

<div class="container mx-auto">
	<div class="w-full my-4 md:w-fit">
		<h1 class="text-lg font-bold text-center">
			<slot name="header" />
		</h1>
	</div>
	<div
		class="flex flex-col md:flex-row justify-center items-center gap-4"
		class:md:flex-row-reverse={reverse}
	>
		<p class="text-lg max-w-sm md:max-w-xl">
			<slot name="info" />
		</p>
		<slot name="compliment" />
	</div>
</div>
