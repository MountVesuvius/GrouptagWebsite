<script>
  import "../app.css";
  import Button from "../components/Button.svelte";

  // Navbar show/hide for mobile
  let active = false;

</script>

<nav class="bg-white flex flex-row">
  <div class="w-screen max-w-screen-xl flex flex-wrap items-center mx-auto p-5 justify-between md:justify-start">
    <!-- Logo -->
    <a class="mr-5" href="/">
      <img src="logos/LogoBlack.webp" alt="Grouptag">
    </a>

    <!-- Hamburger Menu -->
    <button on:click="{() => active = !active}" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200" aria-controls="navbar-default" aria-expanded="{active}">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>

    <!-- Navigation Options w-auto-->
    <div class="{active ? 'block' : 'hidden'} w-[65%] md:block md:flex md:items-center" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-0 md:mt-0 md:border-0">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-black hover:underline">Blog</a>
        </li>

        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-black hover:underline">GIG Program</a>
        </li>

        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-black hover:underline">For Universities</a>
        </li>
        <!-- FIGURE OUT HOW TO GET THIS BUTTON TO DISPLAY CORRECTLY -->
        <div class="justify-self-end">
          <!-- <span>HELLO</span> -->
          <!-- <Button variant="primary" shape="pill">Join Grouptag</Button> -->
        </div>
      </ul>
    </div>
  </div>
</nav>


<main>
  <slot />
</main>

<!-- Work on footer once some content is present -->
<footer>
  <section>
    <!-- <img src="logos/LogoWhite.webp" alt="Grouptag"> -->
    <div></div>
    <div></div>
  </section>
  <section>
    <span></span>
    <div>
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
    </div>
  </section>
</footer>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.700);
  }
</style>