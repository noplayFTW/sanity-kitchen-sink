export default {
  widgets: [
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
                  buildHookId: '60aa8d88c56e6eb708672213',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h9fbdszj',
                  apiId: 'b68f00f1-9e69-4ba8-bf41-2beb9ae38b23'
                },
                {
                  buildHookId: '60aa8d883293e4a117f3248c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6gmbe1ri',
                  apiId: 'ef920b0e-9981-42ff-aa59-41ebc2000018'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/noplayFTW/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6gmbe1ri.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
