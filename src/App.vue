<template>
  <header>
    <div>
     <nav class="me">
      <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active "> <RouterLink to="/">Home</RouterLink></a>
    </li>
    <li class="nav-item">
      <a class="nav-link active "><RouterLink to="/criador">Criador</RouterLink></a>
     </li>
     </ul>
       
      </nav>
    </div>
  </header>

  <RouterView />
</template>


