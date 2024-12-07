<script lang="ts">
	import 'iconify-icon';

	interface Props {
		/**
		 * The name of the icon, must start with "i-" if using unocss
		 */
		icon: `${string}`;

		/**
		 * Additional CSS classes
		 */
		class?: string;

		/**
		 * Does the same as any other HTML id attribute
		 */
		id?: string;

		/**
		 * Don't add default classes
		 */
		noDefaultClass?: boolean;

		/**
		 * The type of icon to use. If "unocss", the icon will be rendered using unocss.
		 * If "iconify", the icon will be fetched and rendered on-demand.
		 */
		type?: 'iconify' | 'unocss';
	}

	function toIconify(icon: `${string}`) {
		if (!icon.startsWith('i-')) return icon;
		let newIcon = icon.slice(2);
		newIcon = newIcon.replace('-', ':');
		return newIcon;
	}

	let {
		icon,
		class: className = '',
		noDefaultClass = false,
		id,
		type = 'iconify'
	}: Props = $props();
</script>

{#if type === 'unocss'}
	<i class={`${noDefaultClass ? '' : 'flex-shrink-0'} ${className} ${icon}`} {id}></i>
{:else}
	<iconify-icon
		class={`${noDefaultClass ? '' : 'inline-block flex-shrink-0 align-middle text-[1em]'} ${className}`}
		icon={toIconify(icon)}
		{id}
	></iconify-icon>
{/if}
