<script setup lang="ts">
import { achievements } from '~/data/achievements'

const youtube = (id: string) => `https://www.youtube.com/watch?v=${id}`
</script>

<template>
  <div class="achievements-grid reveal">
    <article v-for="item in achievements" :key="item.index" class="achievement-card">
      <div
        v-if="item.image"
        class="achievement-media"
        :class="{ 'has-video': item.videoId }"
        v-bind="item.videoId ? {
          role: 'button', tabindex: 0,
          'aria-label': `Play ${item.title}`,
          'data-video-id': item.videoId,
          'data-video-title': item.title,
          'data-video-role': item.role,
          'data-video-url': youtube(item.videoId),
        } : {}"
      >
        <img :src="item.image" :alt="item.imageAlt" :class="item.focus ? `focus-${item.focus}` : undefined" width="1080" height="1080" loading="lazy" decoding="async">
        <span v-if="item.badge" class="achievement-badge">{{ item.badge }}</span>
        <span v-if="item.videoId" class="media-play-btn" aria-hidden="true">▶</span>
      </div>
      <div v-else class="achievement-media achievement-media-empty" role="img" :aria-label="item.imageAlt">
        <span>{{ item.title }}</span>
      </div>

      <div class="achievement-body">
        <div class="achievement-meta">
          <span class="achievement-index">{{ item.index }}</span>
          <span class="achievement-role">{{ item.role }}</span>
        </div>
        <span class="achievement-format">{{ item.format }}</span>
        <h3>{{ item.title }}</h3>
        <p class="achievement-desc">{{ item.description }}</p>
        <div class="achievement-actions">
          <button
            v-if="item.videoId"
            class="achievement-link play-video-trigger"
            type="button"
            :aria-label="`Play ${item.title}`"
            :data-video-id="item.videoId"
            :data-video-title="item.title"
            :data-video-role="item.role"
            :data-video-url="youtube(item.videoId)"
          >
            <span class="play-icon" aria-hidden="true">▶</span> <span>Watch</span>
          </button>
          <a v-else-if="item.externalUrl" class="achievement-link" :href="item.externalUrl.href" target="_blank" rel="noopener noreferrer" :aria-label="item.externalUrl.label">
            <span>{{ item.externalUrl.label }}</span> <span class="arrow" aria-hidden="true">↗</span>
          </a>
          <span v-else class="achievement-tag">{{ item.tag }}</span>
        </div>
      </div>
    </article>
  </div>
</template>
