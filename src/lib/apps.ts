export type App = {
	name: string;
	url: string;
	description: string;
	tags: string[];
};

export const apps: App[] = [
	{
		name: 'Button Layout Editor',
		url: 'https://button-layout.puni.cc',
		description:
			'レバーレスコントローラー用のボタンレイアウトを作成・PNG 書き出しできるツール。Guilty Gear Strive のアクションセットに対応。',
		tags: ['格闘ゲーム', 'ツール'],
	},
];
