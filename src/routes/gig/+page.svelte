<script lang="ts">
    import Calendar from "../../components/Calendar.svelte";
    import { inview } from "svelte-inview";

    let isInView = false;
    let hasAnimated = false;
</script>

<section
    class="bg-grouptag h-[65vh] text-white flex flex-col items-center text-center p-12 sm:px-[30%] sm:justify-center sm:pt-20"
>
    <h1 class="text-3xl sm:text-[3rem] sm:leading-tight font-bold">
        Calling <span class="text-green-800">proactive</span> and
        <span class="text-blue-900">dedicated</span> students to join the Grouptag
        Internship Gateway Program.
    </h1>
    <h1 class="mt-12 text-3xl sm:text-[3rem] sm:leading-tight font-bold">
        Yeah, that's you!
    </h1>
    <br class="my-10" />
    <button
        class="bg-black text-xl text-white font-semibold rounded-xl px-10 py-4"
    >
        Apply Now
    </button>
</section>

<div class="overflow-hidden mb-12">
    <img
        class="scale-[300%] sm:scale-100 ml-[10vw] sm:ml-0 mb-4 sm:mb-0"
        src="images/divider.png"
        alt="Divider"
    />
</div>

<section class="bg-white h-screen text-blacks overflow-hidden">
    <div class="mt-13 mb-10 ml-feature">
        <h3 class="text-3xl font-bold">Here are the features of GIG</h3>
    </div>
    <div class="mx-feature grid grid-cols-4 grid-rows-2 gap-y-12 gap-x-7">
        <div
            class="bg-light-gray border-1 border-solid border-light-gray rounded-4xl"
        >
            <div class="mt-5 mb-6 left-4 relative">
                <Calendar className="w-19 h-18" />
            </div>
            <div class="mb-1.5 left-4 relative">
                <h6 class="text-2xl font-bold">Flexible Hours</h6>
            </div>
            <div class="relative mb-6 left-4">
                <p class="text-base">
                    You choose how many hours you commit a week and which days
                    you work.
                </p>
            </div>
        </div>
        <div
            class="bg-light-gray border-1 border-solid border-light-gray rounded-4xl"
        >
            <div class="my-4 left-4 relative">
                <img
                    class="w-22 h-22"
                    src="images/Navigation-Pin.webp"
                    alt="Navigation Pin"
                />
            </div>
            <div class="mb-1.5 left-4 relative">
                <h6 class="text-2xl font-bold">Flexible Location</h6>
            </div>
            <div class="relative mb-6 left-4">
                <p class="text-base">
                    Work from home, another state, globally or from our office
                    in Melbourne.
                </p>
            </div>
        </div>
        <div
            class="row-span-2 bg-light-gray border-1 border-solid border-light-gray rounded-4xl"
        >
            <div class="my-8 left-3 relative">
                <img
                    class="w-50 h-70 m-0"
                    src="images/Social.webp"
                    alt="Socalizing"
                />
            </div>
            <div class="mb-1.5 left-4 relative">
                <h6 class="text-2xl font-bold">GIGabytes</h6>
            </div>
            <div class="relative mb-6 left-4">
                <p class="text-base">
                    These are open opportunities for any intern to be a part of
                    a meeting, brainstorm or call that you wouldn't get the
                    chance to in other large companies.
                </p>
            </div>
        </div>
        <div
            class="bg-light-gray border-1 border-solid border-light-gray rounded-4xl grid place-items-center"
        >
            <div class="w-52 relative">
                <h6 class="text-2xl font-bold">
                    Stay Connected with Fortnightly one-on-ones, take control of
                    your GIG
                </h6>
            </div>
        </div>
        <div
            class="col-span-2 bg-light-gray border-1 border-solid border-light-gray rounded-4xl"
        >
            <div
                use:inview
                on:inview_change={({ detail }) => {
                    if (!hasAnimated && detail.inView) {
                        isInView = true;
                        hasAnimated = true;
                    }
                }}
            >
                <div
                    class={`h-2 relative mt-25 mb-0.5 left-7 border-t-3 solid border-black box-border origin-left transition-all duration-1000 delay-1000 ease-in-out ${
                        isInView ? "w-47" : "w-0"
                    }`}
                />
                <div
                    class={`bg-light-gray left-40.5 border-3 border-solid border-dark-gray shadow absolute rounded-full origin-center transition-all duration-1000 ease-in-out ${
                        isInView ? "w-12 h-12" : "w-0 h-0"
                    }`}
                />
            </div>
            <div
                use:inview
                on:inview_change={({ detail }) => {
                    if (!hasAnimated && detail.inView) {
                        isInView = true;
                        hasAnimated = true;
                    }
                }}
            >
                <div
                    class={`h-2 relative my-4 left-7 border-t-3 solid border-black box-border origin-left transition-all duration-1000 delay-1000 ease-in-out ${
                        isInView ? "w-79" : "w-0"
                    }`}
                />
            </div>
            <div class="mb-1.5 left-7 relative">
                <h6 class="text-2xl font-bold">Optional Length</h6>
            </div>
            <div class="relative mb-6 left-7">
                <p class="text-base">
                    Pick the duration that suites you, short-term or long-term.
                    6-weeks or 12-weeks.
                </p>
            </div>
        </div>
        <div
            class="bg-light-gray border-1 border-solid border-light-gray rounded-4xl"
        >
            <div class="my-6 left-4 relative">
                <img class="w-18 h-18" src="images/Cup.webp" alt="Cup" />
            </div>
            <div class="mb-1.5 left-4 relative">
                <h6 class="text-2xl font-bold">Appraisal Letter</h6>
            </div>
            <div class="relative mb-6 left-4">
                <p class="text-base">
                    Real, personalised letter of recommendation as soon as you
                    finish with Grouptag.
                </p>
            </div>
        </div>
    </div>
</section>
