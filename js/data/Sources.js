define(function() {
	Sources = {
		config: {
			bgWidth: 180,
			bgHeight: 360,
			colors: 5,
			blocks: 4
		},
		imgs: {
			"bg": "imgs/gameBg.png",
			"block_0": "imgs/blockBlack.png",
			"block_1": "imgs/blockBlue.png",
			"block_2": "imgs/blockGreen.png",
			"block_3": "imgs/blockRed.png",
			"block_4": "imgs/blockYellow.png",
		},
		blockData: {
			//方块
			"0_0": [
				[1, 1],
				[1, 1]
			],
			//直条
			"1_0": [
				[1, 1, 1, 1]
			],
			"1_1": [
				[1],
				[1],
				[1],
				[1]
			],
			//2型
			"2_0": [
				[1, 1, 0],
				[0, 1, 1]
			],
			"2_1": [
				[0, 1],
				[1, 1],
				[1, 0]
			],
			//5型
			"3_0": [
				[0, 1, 1],
				[1, 1, 0]
			],
			"3_1": [
				[1, 0],
				[1, 1],
				[0, 1]
			]
			//7型
			//r型
			//T型
		}

	}
	return Sources;
})