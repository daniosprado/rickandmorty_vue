import { defineStore } from 'pinia'
import { App } from '~/types/app'

interface IComponent {
  show: boolean,
  template: string,
  data: any
}
interface IToast {
  show: boolean,
  message: string,
  icon: string,
  template: string
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): App => {
    return {
      language: 'ptBR',
      loading: false,
      theme: 'dark',
      translate: {},
      drawer: {
        show: false,
        template: '',
        data: {}
      },
      toast: {
        show: false,
        message: '',
        icon: '',
        template: '',
        position: 'top-right'
      },
      modal: {
        show: false,
        template: '',
        data: {}
      }
    }
  },
  getters: {
    getModalData: (state: any) => state.modal.data,
    getModalTemplate: (state: any) => state.modal.template,
    getFavorites: (state: any) => state.favorites,
    isToast: (state: any) => state.toast.show,
    isModal: (state: any) => state.modal.show,
    isDrawer: (state: any) => state.drawer.show,
    isDarkMode: (state: any) => state.theme === 'dark',
    isLoading: (state: any) => state.loading
  },
  actions: {
    setToast (content: IToast) {
      this.show = !this.toast.show
      this.toast.message = content.message
      this.toast.template = content.template
      this.toast.icon = content.icon
    },
    setModal (content: IComponent) {
      this.modal.show = !this.modal.show
      this.modal.template = content.template
      this.modal.data = content.data
    },
    closeModal () {
      this.modal.show = false
      this.modal.template = ''
      this.modal.data = {}
    },
    closeToast () {
      this.toast.show = false
      this.toast.message = ''
      this.toast.template = ''
      this.toast.icon = ''
    },
    setDrawer (content: IComponent) {
      this.drawer.show = content.show
      this.drawer.template = content.template
      this.drawer.data = content.data
    },
    setDrawerTemplate (template: string) {
      this.drawer.template = template
    },
    setLoading (content: boolean) {
      this.loading = content
    },
    setTranslate (content: any) {
      this.translate = content
    },
    closedrawer () {
      this.drawer.show = !this.drawer.show
      this.drawer.template = ''
      this.drawer.data = {}
    }
  }
})
