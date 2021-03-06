import { servicesAvailable } from '/imports/services/_root/client'

const service = {
  name: 'gh-webhooks',
  humanName: 's-gh-webhooks.name',
  pluralName: 's-gh-webhooks.pluralName',
  description: 's-gh-webhooks.description',
  icon: 'fab fa-github',
  iconColor: '#CCC',
  inputable: true,
  stepable: false,
  ownable: true,
  templates: {
    triggerHelp: 'triggerGHWebhooksHelp',
    triggerHelpIntro: 'triggerGHWebhooksHelpIntro',
    detailsView: 'servicesGhWebhooksDetailsView',
    createFormPre: 'servicesGhWebhooksCreateFormPre',
    updateFormPre: 'servicesGhWebhooksUpdateFormPre'
  },
  hooks: {
    // service: {},
    // trigger: {}
  },
  events: [
    {
      name: 'called',
      humanName: 's-gh-webhooks.events.called.name',
      viewerTitle: 's-gh-webhooks.events.called.viewer.title',
      inputable: true,
      stepable: false,
      callback: () => {}
    }
  ]
}

module.exports.service = service

servicesAvailable.push(service)