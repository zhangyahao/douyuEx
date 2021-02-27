function initPkg_FishFood() {
	initPkg_FishFood_Dom();
	initPkg_FishFood_Func();
}

function initPkg_FishFood_Dom() {
	FishFood_insertIcon();
}
function FishFood_insertIcon() {
	let a = document.createElement("div");
	a.className = "fish-food";
	a.innerHTML = '<a class="ex-panel__icon" title="一键鱼塘寻宝"><svg t="1578588143670" style="display: block;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41610" width="36" height="36"><path d="M961.40146484375 293.77460937500007c0-75.01376953125-60.809765625-135.8244140625-135.82792968750002-135.8244140625H197.86572265625006C122.85107421875006 157.9501953125 62.0439453125 218.76171875000006 62.0439453125 293.77460937500007c0 3.0392578125000003 0.140625 6.0380859375 0.3322265625 9.024609375-0.021093749999999998 0.7083984375-0.09316406249999999 1.4080078125000002-0.09316406249999999 2.13310546875v501.1171875c0 32.4544921875 24.837890625000004 58.78212890625 55.48447265625 58.78212890625h787.9060546875c30.650097656249994 0 55.4888671875-26.32763671875 55.4888671875-58.78212890625v-501.1171875c0-0.71982421875-0.07910156249999999-1.4097656250000001-0.0984375-2.1128906250000004 0.193359375-2.99619140625 0.33749999999999997-6.005566406250001 0.33749999999999997-9.044824218750001z m0 0" fill="#F0B417" p-id="41611"></path><path d="M747.34296875 157.9501953125H276.1033203125c-54.37353515625 0-98.66513671875 42.581250000000004-101.66748046875 96.2033203125h674.56845703125c-3.0005859375-53.62119140625-47.29306640625-96.2033203125-101.661328125-96.2033203125z m0 0" fill="#E13633" p-id="41612"></path><path d="M174.30751953125002 268.28984375000005v154.06259765625h674.8303710937499V268.28984375000005c0-0.53525390625-0.06855468749999999-1.05556640625-0.08964843749999998-1.58642578125 0.144140625-2.0759765625 0.22851562500000003-4.180957031249999 0.23818359375000003-6.30263671875h-675.1318359375c0.00791015625 2.1181640625000004 0.09755859375 4.215234375 0.22587890625 6.28330078125-0.007031249999999999 0.5396484374999999-0.07294921875 1.06171875-0.07294921875 1.6057617187500002z m0 310.728515625v154.07138671875h674.8303710937499V579.0183593749999c0-0.530859375-0.06855468749999999-1.0520507812500002-0.08964843749999998-1.57236328125 0.144140625-2.0926757812499996 0.22851562500000003-4.19501953125 0.23818359375000003-6.317578125h-675.1318359375c0.00791015625 2.1216796875 0.09755859375 4.21435546875 0.22587890625 6.2964843749999995-0.007031249999999999 0.54140625-0.07294921875 1.0529296874999998-0.07294921875 1.59345703125z m0 0" fill="#C91111" p-id="41613"></path><path d="M62 476.5080078125h899.44189453125v44.38740234375H62z" fill="#9F7D0F" p-id="41614"></path><path d="M617.06357421875 349.27314453125l65.11025390625001 200.38271484375002-170.45068359375 123.83613281249998-170.45683593750002-123.83613281249998 65.10673828125-200.38271484375002h210.69052734374998z m0 0" fill="#E9BF53" p-id="41615"></path><path d="M608.48984375 362.46376953125l59.81396484375 184.07285156249998-156.5806640625 113.77177734374999-156.5859375-113.77177734374999 59.808691406250006-184.07285156249998h193.5439453125z m0 0" fill="#F0B417" p-id="41616"></path><path d="M558.7578125 481.31738281249994c0-26.054296875-21.11923828125-47.162988281249994-47.16826171875-47.162988281249994-26.043750000000003 0-47.16474609375 21.10869140625-47.16474609375 47.162988281249994 0 22.40859375 15.650683593749998 41.1275390625 36.60205078125001 45.92900390625l-24.581249999999997 60.795703124999996h69.359765625l-23.90185546875-60.732421875c21.084960937499996-4.70478515625 36.854296875-23.49228515625 36.854296875-45.992285156250006z m0 0" fill="#715F39" p-id="41617"></path></svg><i id="fish-food__tip" class="ex-panel__tip"></i></a>';
	
	let b = document.getElementsByClassName("ex-panel__wrap")[0];
	b.insertBefore(a, b.childNodes[0]);
	
}

function initPkg_FishFood_Func() {
	document.getElementsByClassName("fish-food")[0].addEventListener("click", function() {
		getFishFoodV2();
		fetch("https://www.douyu.com/japi/activepointnc/api/getActivePointInfo", {
			method: 'POST',
			mode: 'no-cors',
			credentials: 'include',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(res => {
			return res.json();
		}).then(async (ret) =>{
			let cnt = Math.floor(Number(ret.data.userActivePoint) / Number(ret.data.onceLotteryActivePoint));
			if (cnt == 0) {
				showMessage("【寻宝】" + "鱼粮不足", "warning");
				return;
			}
			cnt = Number(ret.data.dailyMaxLotteryTimes) - Number(ret.data.usedLotteryCount);
			if (cnt == 0) {
				showMessage("【寻宝】" + "今日寻宝次数已到达上限", "warning");
				return;
			}
			for (let i = 0; i < cnt; i++) {
				await sleep(1500).then(() => {
					fetch("https://www.douyu.com/japi/activepointnc/api/dolottery", {
						method: 'POST',
						mode: 'no-cors',
						credentials: 'include',
						headers: {'Content-Type': 'application/x-www-form-urlencoded'},
						body: 'rid=' + rid + '&ctn=' + getCCN()
					}).then(res => {
						return res.json();
					}).then(ret => {
						if (ret.data != null) {
							if (Object.keys(ret.data).length != 0) {
								showMessage("【寻宝】" + ret.data.msg, "success");
							}
						} else {
							showMessage("【寻宝】" + ret.msg, "warning");
						}
						// console.log("【寻宝】" + ret.data.msg);
					}).catch(err => {
						console.log("请求失败!", err);
					})
				})
			}
		})
	})
}

function getFishFoodV2() {
	fetch("https://www.douyu.com/japi/activepointnc/apinc/seniorLotteryV2", {
		method: 'POST',
		mode: 'no-cors',
		credentials: 'include',
		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		body: 'ctn=' + getCCN()
	}).then(res => {
		return res.json();
	}).then(async (ret) =>{
		let cnt = Number(ret.data.leftChance);
		if (cnt == 0) {
			showMessage("【高级寻宝】" + "今日寻宝次数已到达上限", "warning");
			return;
		}
		if (Number(ret.data.yuliang) < Number(ret.data.cost)) {
			showMessage("【高级寻宝】" + "鱼粮不足", "warning");
			return;
		}
		for (let i = 0; i < cnt; i++) {
			await sleep(1500).then(() => {
				fetch("https://www.douyu.com/japi/activepointnc/apinc/doSeniorLotteryV2", {
					method: 'POST',
					mode: 'no-cors',
					credentials: 'include',
					headers: {'Content-Type': 'application/x-www-form-urlencoded'},
					body: 'rid=' + rid + '&ctn=' + getCCN()
				}).then(res => {
					return res.json();
				}).then(ret => {
					if (ret.data != null) {
						if (Object.keys(ret.data).length != 0) {
							showMessage("【高级寻宝】" + ret.data.lotteryRes.data.msg, "success");
						}
					} else {
						showMessage("【高级寻宝】" + ret.msg, "warning");
					}
					// console.log("【寻宝】" + ret.data.msg);
				}).catch(err => {
					console.log("请求失败!", err);
				})
			})
		}
	})
}