## Development

Clone the repo
`git clone https://github.com/olliecaine27/atom-snippets.git`

CD in
`cd atom-snippets`

Symlink the repo to Atom's packages folder
`ln -s "$(pwd -P)" ~/.atom/packages/atom-snippets`

Install the package into Atom
`apm install`
`apm link`

Restart Atom to load the package (it should appear in Preferences->Packages).

Test by opening a JavaScript file in Atom and typing 'rcs' (React Component Skinny) and hitting tab. The following code should appear:

```import React from 'react'
export default class extends React.Component {
    render () {
        return (
          <div>Component content</div>
        )
    }
}
```
