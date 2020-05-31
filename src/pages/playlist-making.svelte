<script>
    import { goto } from '@sveltech/routify'
    import mouse from 'mousetrap'

    import { selectedItems } from '../store'

    import FullScreenBtn from '../components/FullScreenBtn.svelte'
    import HomeBtn from '../components/HomeBtn.svelte'
    import CloseBtn from '../components/CloseBtn.svelte'
    import Selected from '../components/Selected.svelte'
    import StartPlaylist from '../components/StartPlaylist.svelte'

    import SideText from '../components/SideText.svelte'

    import content from '../content'
    

    let index = 0
    

    function backward() {
        if(index == 0) index = content.length
        index--
    }

    function add() {
        $selectedItems.push(index)
        $selectedItems = $selectedItems
    }

    function forward() {
        index++
        if(index == content.length) index = 0
    }

    mouse.bind('left', backward)
    mouse.bind('up', add)
    mouse.bind('right', forward)


</script>

<main style="background-image: url({content[index].picture})">
    <div class="buttonsContainer">
        <HomeBtn />
        <FullScreenBtn />
        <CloseBtn />
    </div>

    <SideText text="l'histoire du rap" />

    <div class="covers">
        {#each content as item, i}
            <img class:selected={index == i} src={item.picture} alt={item.title}>
        {/each}
        <div class="controls">
            <button on:click={backward}><i class="fa fa-backward"></i></button>
            
            {#if $selectedItems.includes(index)}
                    <Selected />
            {:else}
                    <button on:click={add}><i class="fa fa-plus"></i></button>
            {/if}
            
            <button on:click={forward}><i class="fa fa-forward"></i></button>
        </div>
    </div>

    <h1>{content[index].title}</h1>
    <p>{content[index].description}</p>

    <StartPlaylist icon="play" link="/playlist-done" text="Lancer ma playlist" />
</main>

<style>

main {
    background-color: #333;
    background-blend-mode: multiply;
}

.covers {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 48vh;
    width: 48vh;
}

.covers img {
    width: 40vh;
    height: 40vh;
    object-fit: cover;
    filter: saturate(0) brightness(.6);
    position: absolute;
    transition: transform .2s;
    transform: translate(-5vw);
}

/* next */
.covers .selected ~ img {
    transform: translate(5vw);
}

/* selected */
.covers img.selected {
    transform: scale(1.2);
    z-index: 999;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    filter: saturate(0) brightness(1);
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

.controls {
    position: absolute;
    z-index: 9999;
    bottom: 0;
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .7));
    display: flex;
    justify-content: center;
}

.controls button{
    background: none;
    border: none;
}

.controls i {
    color: #fff;
    cursor: pointer;
    font-size: 1.3em;
}
</style>