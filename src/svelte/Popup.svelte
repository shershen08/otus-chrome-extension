<script>
	export let data;
	const video = document.querySelector('video')

	const ffVideoToTime = (e) => {
		const time = e.target.dataset.time

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				type:"setvideotimer",
				time
				}, function(response){
				// on success
			});
		});
	}

	const timestampToTime = (timestamp) => {
		  var sec_num = parseInt(timestamp, 10);
			var hours   = Math.floor(sec_num / 3600);
			var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
			var seconds = sec_num - (hours * 3600) - (minutes * 60);

			if (hours   < 1) {
				hours   = ''}
			if (minutes < 10) {minutes = "0"+minutes;}
			if (seconds < 10) {seconds = "0"+seconds;}
			return `${hours ? hours +':' : ''} ${minutes}:${seconds}`;
	}

</script>

<section>
	<header>
		<h5>Навигация по видео</h5>
	</header>
	<ul>
		{#each data as item, i (item.start)}
			<li>
				<span class="item-title" on:click|capture={ffVideoToTime} data-time={item.start}>{item.text}</span>
				<span class="item-timestamp">{timestampToTime(item.start)}</span>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		font-family: Arial, Helvetica, sans-serif;
	}
	header {
			display: inline-block;
	}
	h5 {
		display: inline-block;
		margin-bottom: 0px;
	}
	li {
		padding: 5px;
		list-style-type: none;
		cursor: pointer;
	}
	li:hover {
		background: #ffcc008a;
	}
	ul {
		padding-left: 0;
		width: 260px;
	}
	.item-timestamp {
		width: 55px;
    	display: inline-block;
		text-align: center;
		float: left;
	}
	.item-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 160px;
		display: inline-block;
	}
</style>