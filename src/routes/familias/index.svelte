
<script context="module">
  import { client } from '../apolloClient';
  import FAMILIAS_MANY from '../../consultas/FAMILIAS_MANY' 

  export async function preload() {
    let familias = await client.query({
      query: FAMILIAS_MANY
    })
    return {
      familias: familias.data.FamiliaMany
    }
  }
</script>

<script>
  export let familias;

  console.log(familias)

</script>

<style>
  /* your styles go here */
</style>

<h1>Familias</h1>
<ul>
  {#each familias as familia}
    <li> {familia.nombreOriginario} </li>
  {/each}
</ul>