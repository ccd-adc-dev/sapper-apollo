
<script context="module">
  import { client } from '../apolloClient';
  import FAMILIAS_MANY from '../../consultas/FAMILIAS_MANY' 

  export async function preload() {
    let aux = await client.query({
        query: FAMILIAS_MANY
      })
    return {
      cache: aux
    }
  }
</script>

<script>
  import { restore, query } from 'svelte-apollo';

  export let cache;

  restore(client, FAMILIAS_MANY, cache.data);
  const familias = query(client, { query: FAMILIAS_MANY });
  function reload() {
    familias.refetch();
  }
</script>

<style>
  /* your styles go here */
</style>

<h1>Familias</h1>
{#await $familias}
  Loading...
{:then result}
  {#if result.data}
      {#each result.data.FamiliaMany as familia}
        <li>{familia.nombreOriginario}</li>
      {/each}
  {:else}
    Loading...
  {/if}
  <!-- {#each result.data.FamiliaMany as familia}
    {familia.nombreOriginario}
  {/each} -->
{:catch error}
  Error: {error}
{/await}