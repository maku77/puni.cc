<script lang="ts">
	import { apps } from '$lib/apps.js';

	function getDescription(app: import('$lib/apps.js').App): string {
		const lang = navigator.language;
		return lang.startsWith('ja') ? app.description.ja : app.description.en;
	}
</script>

<svelte:head>
	<meta name="description" content="puni.cc が提供する Web アプリ一覧" />
</svelte:head>

<main>
	<header>
		<h1>puni.cc</h1>
		<p>puni.cc が提供する Web アプリの一覧です。ぷにぷに</p>
	</header>

	<section class="grid">
		{#each apps as app (app.url)}
			<a href={app.url} class="card" target="_blank" rel="noopener noreferrer">
				{#if app.image}
					<div class="card-image">
						<img src={app.image} alt={app.name} />
					</div>
				{/if}
				<div class="card-body">
					<h2>{app.name}</h2>
					<p>{getDescription(app)}</p>
				</div>
				<div class="card-footer">
					{#each app.tags as tag (tag)}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			</a>
		{/each}
	</section>
</main>

<style>
	main {
		max-width: 960px;
		margin: 0 auto;
		padding: 3rem 1.5rem;
	}

	header {
		text-align: center;
		margin-bottom: 3rem;
	}

	header h1 {
		font-size: 2.5rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: #ffffff;
	}

	header p {
		margin-top: 0.5rem;
		font-size: 1rem;
		color: #888899;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.25rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #1a1a2e;
		border: 1px solid #2a2a44;
		border-radius: 12px;
		overflow: hidden;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease,
			border-color 0.15s ease;
	}

	.card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
		border-color: #5555aa;
	}

	.card-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background-color: #0d0d1a;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.card-body {
		padding: 1.5rem 1.5rem 0;
	}

	.card-body h2 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #ffffff;
		margin-bottom: 0.6rem;
	}

	.card-body p {
		font-size: 0.875rem;
		line-height: 1.6;
		color: #aaaacc;
	}

	.card-footer {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		padding: 1.25rem 1.5rem 1.5rem;
	}

	.tag {
		font-size: 0.75rem;
		padding: 0.2rem 0.6rem;
		border-radius: 999px;
		background-color: #2a2a50;
		color: #9999cc;
	}
</style>
