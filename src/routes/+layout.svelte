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
          <a href="https://grouptag.substack.com/" class="block py-2 pl-3 pr-4 text-black hover:underline">Blog</a>
        </li>

        <li>
          <a href="/gig" class="block py-2 pl-3 pr-4 text-black hover:underline">GIG Program</a>
        </li>

        <li>
          <a href="/for-universities" class="block py-2 pl-3 pr-4 text-black hover:underline">For Universities</a>
        </li>
        <li>
          <a href="/student-clubs" class="block py-2 pl-3 pr-4 text-black hover:underline">Clubs</a>
        </li>
        <li>
          <a href="/groups" class="block py-2 pl-3 pr-4 text-black hover:underline">Groups</a>
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


<main class="overflow-hidden">
  <slot/>
</main>

<footer class="bg-[#242323] h-10 sm:h-[50vh] text-white pt-10 overflow-hidden">
  <section class="invisible sm:visible flex flex-row justify-center items-start space-x-48">
    <img class="self-top" src="logos/LogoWhite.webp" alt="Grouptag">
    <div class="space-y-5">
      <strong>More Grouptag</strong>
      <ul class="text-gray-400 space-y-5">
        <li>Contact</li>
        <li>Press</li>
        <li>Internships</li>
        <li>Clubs & Societies</li>
      </ul>
    </div>
    <div class="space-y-5">
      <strong>Legal</strong>
      <ul class="space-y-5 text-gray-400">
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  </section>

  <section class="flex flex-col justify-center items-center py-10 space-y-5">
    <hr class="w-[80vw]">
    <span>© 2023 Grouptag Pty Ltd. All Rights Reserved.</span>
    <div class="flex space-x-2">
      <img src="icons/Facebook.webp" alt="Facebook Icon">
      <img src="icons/Twitter.webp" alt="Twitter Icon">
      <img src="icons/Instagram.webp" alt="Instagram Icon">
    </div>
  </section>
</footer>

<!-- 
<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.700);
  }
</style> -->