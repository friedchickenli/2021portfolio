<template>
  <div>
    <GradientBackground />
    <Container>
      <Nuxt />
    </Container>
    <Navigation />
  </div>
</template>
<style>
html {
  font-family:
     'Montserrat',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  scroll-behavior: smooth;
  margin: 0;
}

.titleWithOutline {
  font-family: "Rubik", sans-serif;
  font-size: 5rem;
  font-weight: bold;
  letter-spacing: 0.8rem;
  color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #404040;
  position: relative;
  z-index: 1;
}

.titleWithOutline::after {
  content: attr(data-text);
  /* color: #f4d9d4; */
  -webkit-text-stroke-color: transparent;
  position: absolute;
  right: -10px;
  bottom: -9px;
  z-index: -1;
}

.pText {
  font-family: "Montserrat", "sans-serif";
  font-weight: medium;
  font-size: 1rem;
  color: #404040;
  letter-spacing: 3px;
  position: relative;
  
}
</style>
