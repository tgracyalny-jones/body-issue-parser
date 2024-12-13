# Body Issue Parser
Scans a given body text (typically from PR) and captures any issues that are set to be `closed`

Heavily inspired by [Issue Refs Parser by FujiHaruka](https://github.com/FujiHaruka/issue-refs-parser-action)

___

## Inputs
### `body`
This field is `required`. Some form of string that will be parsed for issues. Typically a PR body, Issue Body, or a Comment.

## Outputs
The output is an array of numbers. These numbers correlate to any issue that was found within the provided body field. The syntax for returning them is `issues`.

```
This is a PR body
Closes #2
Closes #98 #Closes #24
```
Returns
`[2, 98, 24]`

## Action Example
```yaml
jobs:
  parse-pr:
    runs-on: ubuntu-latest
    permissions: write-all
    name: Parse PR for any Closed Issues
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Parse Body
        uses: tgracyalny-jones/body-issue-parser@v1.0
        id: issues
        with:
          body: 'Closes #1 Closes #2'
      - name: Close issues
        run: | 
          issues=($(echo "${{ steps.custom.outputs.issues }}" | jq -r '.[]'))
          if ! [[ -z $issues ]]; then
            for issue in "$issues";
            do
              gh issue close --comment "Auto-closing issue" "$issue"
            done
          fi
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
Make sure to check for an empty array incase it returns nothing
