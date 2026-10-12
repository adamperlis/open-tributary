# Contributing to Open Tributary

Open Tributary and the Open Royalty License (ORL) start as an open white paper: a public draft of how
royalties for open source creators could work. It is meant to be picked apart. Maintainers, builders,
lawyers, and skeptics are all welcome.

## Ways to contribute

- **Discuss it in public.** Questions, ideas, and open-ended debate go in
  [Discussions](https://github.com/adamperlis/open-tributary/discussions).
- **Challenge a specific part.** Open a
  [proposal feedback issue](https://github.com/adamperlis/open-tributary/issues/new?template=proposal-feedback.yml)
  that names the section, quotes it, and explains what should change.
- **Propose new wording.** Open a pull request that edits the text directly:
  - the manifesto: `src/content/writing/manifesto.md`
  - the principles and open questions: `src/pages/license.astro`
  - the limitations: `src/components/ProposalLimitations.astro`
  - the royalty loop: `src/components/RoyaltyLoop.astro`
- **Fix the site.** Report problems with a
  [site issue](https://github.com/adamperlis/open-tributary/issues/new?template=site-issue.yml), or send a pull request.
- **Prefer to stay private?** Email [support@b150.ai](mailto:support@b150.ai).

## Ground rules for proposal changes

- **It's a proposal, not terms.** Keep the draft's conditional language ("would," "could," "proposed").
  Nothing here should read as binding license terms or legal advice.
- **Be specific.** Point to the sentence you are responding to and say what you would write instead.
- **Show your sources.** Link evidence for claims about existing projects, licenses, payments, or law.
- **Name the tradeoff.** Most hard questions have costs on both sides. Say which side you are choosing and why.

## Running the site locally

```bash
npm install
npm run dev
```

Before opening a pull request that touches code, make sure `npm run build` passes.

## Licensing of contributions

By contributing, you agree that writing is contributed under [CC BY 4.0](LICENSE-CONTENT.md) and code under
the [MIT License](LICENSE.md), the same terms as the rest of this repository.
