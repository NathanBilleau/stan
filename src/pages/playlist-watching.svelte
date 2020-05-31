<script>
    import { goto } from '@sveltech/routify'

    import FullScreenBtn from '../components/FullScreenBtn.svelte'
    import HomeBtn from '../components/HomeBtn.svelte'
    import CloseBtn from '../components/CloseBtn.svelte'
    import StartPlaylist from '../components/StartPlaylist.svelte'
    import SideText from '../components/SideText.svelte'

</script>

<main>
    <div class="buttonsContainer">
        <HomeBtn />
        <FullScreenBtn />
        <CloseBtn />
    </div>


    <SideText text="l'histoire du rap" />
</main>

<style>

main {
    background-color: #333;
    background-blend-mode: multiply;
}
</style>