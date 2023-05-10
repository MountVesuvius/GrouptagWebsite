<script lang="ts">
  import type { HTMLAttributes } from 'svelte';
  export let label;

  interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
    size?: 'sm' | 'md' | 'lg' | 'ignore'
    shape?: 'default' | 'pill' | 'round' 
  }

  export let variant: ButtonProps['variant'] = 'primary';
  export let size: ButtonProps['size'] = 'md';
  export let shape: ButtonProps['shape'] = 'default';

  const variantClasses = {
    primary: 'bg-[#46CDFF] text-white hover:bg-blue-600',
    secondary: 'bg-[#01283A] text-white hover:bg-gray-400',
    success: 'bg-green-500 text-white hover:bg-green-600',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-7 py-0 h-14 text-base',
    lg: 'px-7 py-5 text-lg',
    ignore: 'p-0 text-base'
  }

  const shapeClasses = {
    default: 'rounded-xl',
    pill: 'rounded-full justify-center items-center',
    circle: 'rounded-full w-16 h-16 justify-center items-center flex'
  }

</script>

<button class="{sizeClasses[size]} {variantClasses[variant]} {shapeClasses[shape]}">
  <!-- {label} -->
  <slot />
</button>