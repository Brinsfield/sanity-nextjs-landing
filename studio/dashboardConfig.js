export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6010b88728223f44bf8338c4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-studio-gmufggus',
                  apiId: 'ff084440-351a-455d-8fbd-59316676cb09'
                },
                {
                  buildHookId: '6010b887e426f44b0b036607',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-web-ney8yb5r',
                  apiId: '1dbd08ac-7bb5-4d1b-a55e-10bfe03e213b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Brinsfield/sanity-nextjs-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-web-ney8yb5r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
