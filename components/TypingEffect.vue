<template>
  <div class="typing-effect">
    <span ref="typedText"></span>
  </div>
</template>

<script setup>
import { onMounted, nextTick, ref } from "vue";

const text = "Développeur Web FullStack";
const typingSpeed = 100;

const typedText = ref(null);

onMounted(() => {
  nextTick(() => {
    typeText();
  });
});

const typeText = () => {
  let index = 0;
  const spanElement = typedText.value;

  if (spanElement) {
    const interval = setInterval(() => {
      if (index < text.length) {
        spanElement.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
  }
};
</script>

<style scoped>
.typing-effect {
  font-family: "Formula Condensed", sans-serif;
  font-size: 6rem;
  font-weight: bold;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid #205b43;
  padding-right: 2px;
  animation: blink-caret 0.75s step-end infinite;
}

/* Animation pour faire clignoter le curseur */
@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

@media screen and (max-width: 992px) {
  .typing-effect {
    font-size: 4rem;
  }
}

@media screen and (max-width: 768px) {
  .typing-effect {
    font-size: 3rem;
  }
}
</style>