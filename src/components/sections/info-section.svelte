<script>
	export let reverse = false;
</script>

<div class="container mx-auto">
	<div class="w-full md:w-[130ch] md:max-w-full mx-auto">
		<div class="w-fit mx-auto md:mx-0 py-4">
			<h1 class="text-xl font-bold text-center">
				<slot name="header" />
			</h1>
		</div>

		<div class="max-w-full flex gap-4 flex-col md:flex-row" class:md:flex-row-reverse={reverse}>
			<div class="w-full w-full md:w-1/2 my-auto">
				<slot name="info" />
			</div>
			<div class="w-full md:w-1/2">
				<div class="w-full mx-auto">
					<slot name="compliment" />
				</div>
			</div>
		</div>
	</div>
	
</div>
