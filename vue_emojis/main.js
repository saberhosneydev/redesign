Vue.component('emojis-list', {
	template:'<div><img :src="value" :title="propName" v-for="(value, propName) in images" height="32" width="32" @click="selectEmoji(value)"></div>',
	data() {
		return {
			images: emojis
		}
	},
	methods: {
		selectEmoji(data) {
			var img = document.createElement('img');
			var parent = document.querySelector('#imgsrc');
			img.src = data;
			img.height = 32;
			img.width = 32;
			parent.appendChild(img);
		}
	}
});

Vue.component('selected-emojis', {
	template: '<h3>Selected Emoji is : <span id="imgsrc"></span></h3>'
});

new Vue({
	el:"#root"
});