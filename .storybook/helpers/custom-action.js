import { script } from './lit-script';

export function action (compName, eventNames) {
  return script(`
    (function(){
      const uniqueId = (eventName) => eventName + '-' + (new Date()).getTime();
      const comp = document.querySelector('${compName}');
      ${eventNames.map((eventName) => `
        comp.addEventListener('${eventName}', (event) => {
          __STORYBOOK_ADDONS.getChannel()
            .emit('storybook/actions/action-event', {
              count: 0,
              data: {
                name: '${eventName}', args: event.detail
                // the next line need a fix in telesync: https://github.com/storybookjs/storybook/issues/8544
                // name: '${eventName}', args: [event]
              },
              id: uniqueId,
              options: {depth: 15, clearOnStoryChange: true, limit: 50, allowFunction: false}
            })
        });
      `).join('')}
    })()
  `);
}
