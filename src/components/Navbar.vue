<template>
    <header>
    <div class="w-screen mx-0">
    <nav class="flex px-32">
      <div class="flex items-center h-16 w-full justify-end font-montserrat">
          <div class="hidden md:block">
            <ul class="ml-10 flex space-x-10">
              <router-link :to="{name: 'Dashboard'}">
                <li><a href="" class="text-blue-900 hover:font-bold">Home</a></li>
              </router-link>
              <router-link :to="{name: 'Riset'}">
                <li><a href="#statistik" class="text-blue-900 hover:font-bold">Riset</a></li>
              </router-link>
              <router-link :to="{name: 'Magang'}">
                <li><a href="#rekomendasi" class="text-blue-900 hover:font-bold">Magang</a></li>
              </router-link>
              <li><a href="#" class="text-blue-900 hover:font-bold">About</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>