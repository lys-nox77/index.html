const logText = `
【序章】
この惑星が、まだ朝食という奇跡に包まれていた頃──
中西家は、日常という名の小宇宙を、静かに、しかし確かにまわしていた。

だがある日、それは崩れ去った。
突如として訪れた、“骨折”という運命のクエスト。

母は静かに倒れ、
テレビの音量を調整することすら、もう叶わなかった。

【中盤】
傷ついた母に代わり、家族の運命は大きく揺らぎはじめる。
シンクには洗われる予定だった食器たちが眠り、
洗濯カゴは膨れ上がり、物理法則に抗い始める。

【父の覚醒】
常にうるさい、父。
家事？してるかもしれんし、してないかもしれん。
だが確かなのは、彼が「米を炊いている」という事実だ。

それは、日常という名の宇宙船を操縦する航海士のごとく──

【終章】
東京にいる僕には、何もできない。
春。こっちは雨。そっちはたぶん晴れ。

でもそれでも、
僕の祈りだけは、秒速5cmではなく、秒速マッハで届いてほしい。

この家が、どうにか回っているという事実。
それは、神話である。
`;

const logContainer = document.getElementById('log');
const lines = logText.trim().split('\n');
let index = 0;

function showNextLine() {
  if (index < lines.length) {
    const line = document.createElement('div');
    line.textContent = lines[index];
    logContainer.appendChild(line);
    index++;
    setTimeout(showNextLine, 2500); // ゆっくり表示
  }
}

window.onload = () => {
  showNextLine();
};
