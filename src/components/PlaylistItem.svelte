<script>
    import ytThumb from 'youtube-img'
    export let item
    export let i
    export let select
    export let playing
</script>

<div class="playlistItemContainer">
    <img src={ytThumb(item.video, 'hq')} alt={item.title} on:click={() => select(i)}>
    <div>
        <h1 on:click={() => select(i)}>
            {item.title}
        </h1>
        <p>
            {#if i === playing}
                <span>En cours de lecture</span>
            {:else}
                {item.description.substr(0, 130)}...
            {/if}
        </p>
    </div>
</div>

<style>

.playlistItemContainer {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    height: 130px;
    position: relative;
    grid-gap: 20px;
    margin: 20px 0;
}

.playlistItemContainer div {
    display: flex;
    flex-direction: column;
    justify-content: top;
}

h1,
p {
    text-align: left;
    color: #fff;
    font-size: .8em;
}

h1 {
    letter-spacing: 0;
    text-transform: none;
    margin-bottom: 0;
    font-size: 1em;
}

p {
    font-weight: 400;
    line-height: 1.1em;
}

p span {
    color: #fff;
    text-transform: uppercase;
}

img {
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
    filter: grayscale(1);
}

h1,
img {
    cursor: pointer;
}

</style>