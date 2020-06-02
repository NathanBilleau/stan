<script>
    import { goto } from '@sveltech/routify'
    import ytThumb from 'youtube-img'
    
    import { selectedItems } from '../store'
    import content from '../content'

    import FullScreenBtn from '../components/FullScreenBtn.svelte'
    import HomeBtn from '../components/HomeBtn.svelte'
    import CloseBtn from '../components/CloseBtn.svelte'
    import StartPlaylist from '../components/StartPlaylist.svelte'
    import SideText from '../components/SideText.svelte'
    import PlaylistItem from '../components/PlaylistItem.svelte'

    let playing = false
    let index = 0
    let myPlaylist = content

    if ($selectedItems.length !== 0) {
        myPlaylist = myPlaylist.filter((item, i) => {
            return $selectedItems.includes(i)
        })
    }

    if ($selectedItems.length === 0) {
        $goto('/playlist-making')
    }

    function select(s) {
        index = s
        index = index
        playing = false
    }

</script>

<main>
    <div class="buttonsContainer">
        <HomeBtn />
        <FullScreenBtn />
        <CloseBtn />
    </div>

    <div class="playerContainer">

        {#if playing}
            <iframe width="560" height="315" src={myPlaylist[index].video.replace('watch?v=', 'embed/')} autoplay title={myPlaylist[index].title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {:else}
            <div class="thumbnail" on:click={() => playing = true}>
                <img src={ytThumb(myPlaylist[index].video, 'maxres')} alt={myPlaylist[index].title}>
                <i class="fa fa-play"></i>
            </div>
        {/if}

        <div class="list">
        {#each myPlaylist as item, i}
            <PlaylistItem {item} {i} {select} playing={index} />
        {/each}
        </div>

        <div>
            <h1>{myPlaylist[index].title}</h1>
            <p>{myPlaylist[index].description}</p>
        </div>

        <div>
            <p>Vous avez regardé toutes les vidéos ?</p>
            <StartPlaylist text="passer le test" link="/test" icon="forward" />
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
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 2fr 1fr;
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

.thumbnail {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.thumbnail:hover i {
    transform: scale(1.2);
}

.thumbnail img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: grayscale(1);
}

.thumbnail i {
    color: #fff;
    position: absolute;
    font-size: 4em;
    text-shadow: 0 0 5px rgba(0, 0, 0, .3);
    transition: .25s;
}

</style>