<script>
    import { goto } from '@sveltech/routify'

    import FullScreenBtn from '../components/FullScreenBtn.svelte'
    import HomeBtn from '../components/HomeBtn.svelte'
    import CloseBtn from '../components/CloseBtn.svelte'
    import StartPlaylist from '../components/StartPlaylist.svelte'
    import Advice from '../components/Advice.svelte'

</script>

<main>
    <div class="buttonsContainer">
        <HomeBtn />
        <FullScreenBtn />
        <CloseBtn />
    </div>


    <h1>L'histoire du rap</h1>

    <p>
        Visionnez les différentes vidéo que vous avez sélectionné <br>
        Une fois que vous êtes prêt, cliquez sur
        <StartPlaylist icon="forward" disabled text="Passer le test" />
        Répondez aux questions et obtenez votre note
        <span>Bon visionnage !</span>
    </p>

    <button class="understood" on:click={$goto('/playlist-watching')}>
        <i class="fa fa-check"></i>
        Ok, j'ai compris
    </button>


    <Advice text="Pour une meilleure immersion, n'hésitez pas à porter un casque ou des écouteurs" />
</main>

<style>

main {
    background-color: #333;
    background-blend-mode: multiply;
}
</style>