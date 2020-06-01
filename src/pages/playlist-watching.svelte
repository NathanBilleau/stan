<script>
    import { goto } from '@sveltech/routify'
    
    import { selectedItems } from '../store'
    import content from '../content'

    import FullScreenBtn from '../components/FullScreenBtn.svelte'
    import HomeBtn from '../components/HomeBtn.svelte'
    import CloseBtn from '../components/CloseBtn.svelte'
    import StartPlaylist from '../components/StartPlaylist.svelte'
    import SideText from '../components/SideText.svelte'
    import PlaylistItem from '../components/PlaylistItem.svelte'

    let index = 0


    function select(s) {
        console.log(s);
        
        index = s
        index = index
    }

</script>

<main>
    <div class="buttonsContainer">
        <HomeBtn />
        <FullScreenBtn />
        <CloseBtn />
    </div>

    <div class="playerContainer">
        <iframe width="560" height="315" src={content[index].video.replace('watch?v=', 'embed/')} title={content[index].title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <div class="list">
        {#each content as item, i}
            <PlaylistItem {item} {i} {select} />
        {/each}
        </div>

        <div>
            <h1>{content[index].title}</h1>
            <p>{content[index].description}</p>
        </div>

        <div>
            <p>Vous avez regardé toutes les vidéos ?</p>
            <StartPlaylist text="passer le test" link="/test" />
        </div>
    </div>


    <SideText text="l'histoire du rap" />
</main>

<style>

main {
    background-color: #111;
    background-blend-mode: multiply;
}

.playerContainer {
    display: grid;
    grid-template-columns: 2fr 1.3fr;
    grid-template-rows: 5fr 1fr;
    width: calc(100% - 200px);
    height: calc(100% - 200px);
    align-items: center;
}

iframe {
    width: 100%;
}

h1,
p {
    text-align: center;
    color: #fff;
    max-width: 60vw;
}

h1 {
    letter-spacing: 0;
    text-transform: none;
    margin-bottom: 0;
    font-size: 1.3em;
}

p {
    font-weight: 400;
}

.list {
    height: 100%;
    overflow-y: auto;
    padding: 0 20px;
}

</style>