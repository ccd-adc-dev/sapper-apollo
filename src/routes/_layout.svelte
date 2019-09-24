<script>
	
	import Nav from '../componentes/Nav.svelte';
	// import Familias from '../componentes/Familias.svelte';

	export let segment

</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
