export type AppDescription = {
	en: string;
	ja: string;
};

export type App = {
	name: string;
	url: string;
	description: AppDescription;
	image?: string;
	tags: string[];
};

export const apps: App[] = [
	{
		name: 'Button Layout Editor',
		url: 'https://button-layout.puni.cc',
		description: {
			en: 'A tool for creating and exporting button layouts for leverless controllers. Supports the action set for Guilty Gear Strive.',
			ja: 'レバーレスコントローラー用のボタンレイアウトを作成・PNG 書き出しできるツール。Guilty Gear Strive のアクションセットに対応。',
		},
		image: '/ggst-layout.png',
		tags: ['格闘ゲーム', 'ツール'],
	},
];
