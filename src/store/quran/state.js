import { LocalStorage } from "quasar";

export default function() {
  return {
    surah: null,
    pageScrollPosition: LocalStorage.getItem("page-scroll-position") ?? {},
    playerSettings: LocalStorage.getItem("player-settings") ?? {
      audioReciterId: 7, // Mishari Rashid al-`Afasy
      singleRepeatNumber: 999, // Infinite
      continuedRepeatNumber: 999 // Infinite
    },
    searchAyah: {
      fullMatch: false,
      paging: {
        total: 0,
        perPage: 20,
        currentPage: 1,
        totalPage: 0
      },
      results: [],
      resultTranslations: []
    },
    loading: {
      fetchSurah: false,
      searchAyah: false
    }
  };
}
