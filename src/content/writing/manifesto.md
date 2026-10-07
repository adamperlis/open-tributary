---
title: "The era of personal software"
byline: "Adam Perlis"
---

## The weekend personal software got real

Nara Baby was the tracker every new parent I knew used. Feeds, sleep, diapers, shared between partners and grandparents. [Over a million parents](https://www.nowsecure.com/marc-app/nara-baby-pregnancy-tracker-ios/) had used it.

Then they killed the free tier. Everyone has to pay now.

So instead of paying, I built my own.

Three days later I had my own version running: [Gaia](https://gaiababy.app). Not a mockup. A working build my family uses every day, and honestly, it's just as good.

I'm not telling you this to brag. I'm telling you because it should scare every software company on earth.

If one person can rebuild a million-user app over a long weekend, the question "should we build it or buy it?" just got a completely different answer.

Welcome to the era of personal software.

## Personal software flips build vs. buy

For 30 years the answer was simple: buy. Building software was slow, expensive, and required engineers you couldn't afford. So you paid for the closest thing on the shelf and bent your workflow around it.

That math is gone.

I'm a designer, not an engineer. Here's what I've built in the last year and a half:

- [**B150**](https://b150.ai)**:** a social network for AI builders that does everything LinkedIn does.
- [**Walkie**](https://trywalkie.com)**:** a voice-to-text app that competes with Wispr Flow, a startup that raised $81M.
- **Camcorder:** a screen recorder in the spirit of Screen Studio.
- **Zine:** an AI growth marketing engine for SEO and AI search.
- **Source:** an applicant tracking system for my recruiting business, in progress. It replaces a tool that costs us more than $6,000 a year.
- [**Transistor OS**](https://transistoros.com)**:** my most ambitious project yet, an AI-first personal operating system, now in beta.
- [**Gaia**](https://gaiababy.app)**:** my baby tracker, the Nara replacement, built in three days.

Most of them started from an open source base and a weekend.

And I'm not special. Look around. People are building their own CRMs, their own budgeting tools, their own habit trackers. Not because the off-the-shelf version is bad, but because theirs fits exactly.

That's personal software: tools built for an audience of one. Or ten. Or your company of 40.

The new question isn't "can I afford to build this?" It's "why would I keep paying for something I could own?"

## Personal software goes to work: individuals, small business, then the enterprise

This moves in waves, and the second wave is already here.

Small businesses feel SaaS pain more than anyone. A 15-person agency might pay for 30 tools, each charging per seat, each solving 70% of the problem. For them, one person who can build is worth more than a dozen subscriptions. I know because I used to run my recruiting business on Airtable, Zapier, and duct tape. It worked, eventually. It cost a fortune and never quite fit.

So I'm doing something about it. Right now I'm building Source, an applicant tracking system for my recruiting business. It replaces the single most expensive tool we pay for, more than $6,000 a year, gone.

And it's not the last. I'm planning to build replacements for more and more of the tools we pay for. The goal: a company that's 80% built and 20% bought.

Ten years ago that would have been a crazy goal for a recruiting firm. Today it's just a roadmap.

The third wave is the enterprise. Big companies already build internally when the stakes are high enough. What changes now is the threshold. When a small internal team with AI can ship in weeks what a vendor sells for $500K a year, procurement starts asking a new question.

My prediction: within a few years, "internal tools team" becomes one of the fastest-growing job titles in the Fortune 500. Not to replace every vendor, but to stop renting the software that defines how the company actually works.

The companies that own their workflows will move faster than the ones that rent them.

## What personal software does to SaaS

Here's the uncomfortable truth for founders: features are no longer a moat.

If your product is a nice UI on top of a database, someone can rebuild it in days. Not a worse version. A version tailored to them, which for them is better.

So what's left to defend? A few things still hold:

- **Data and network effects.** A clone of the app isn't a clone of the users.
- **Trust and accountability.** Enterprises pay for someone to call when it breaks, and for compliance they don't have to own.
- **Distribution.** Being the default in an app store or a workflow is still worth a lot.
- **Taste.** Most people can build now. Few can build something that feels great.

Everything else, the per-seat subscription for a tool that does one job, is on borrowed time.

The SaaS companies that survive will look less like landlords and more like utilities: infrastructure people build on top of, not apps people rent.

## Personal software runs on unpaid open source

Here's the part nobody wants to talk about.

Personal software doesn't come from nowhere. Almost every tool I've built started on someone else's open source project. Someone spent years on it. I spent a weekend on top of it, polished the UX, and shipped.

That's the whole movement. Open source is the raw material of personal software. And the people producing it are, overwhelmingly, unpaid or underpaid.

The model was always fragile: give it away, hope for donations, maybe sell support. It barely worked when a few companies used your code. It completely breaks when millions of people and AI agents are remixing it every day.

We're about to build the next generation of software on the backs of people who can't pay rent from their work. That's not a moral footnote. It's a supply chain risk. If maintainers burn out and walk away, the foundation everyone builds on rots.

## Paying the people personal software is built on

Musicians don't get paid only when you buy the album. They get paid every time the song is played, sampled, or used in a commercial.

Software could work the same way.

Imagine open source that stays free to build on and remix, until you make money from it. Then a small share flows back to the people whose work made your product possible. Not donations. Not an honor system. Royalties, paid automatically, that scale with how much your product actually earns.

Some pieces already exist. Dependency manifests can identify many of the packages an app uses. But that isn't complete attribution. Copied snippets, forks, and AI-generated code are harder to trace, and a package list doesn't prove who owns each contribution or what share they should receive. We still need both a reliable attribution process and the payment rail.

Which is why I think my next build might be exactly that: a payment protocol for open source creators. One open standard that tracks what your software is built on and pays those creators automatically when you earn.

It needs two pieces. A license, the way open source has MIT: I'd call it the [**Open Royalty License (ORL)**](/license). And a protocol that enforces it and moves the money: [**Tributary**](/). Every app is a river fed by smaller streams, the open source projects underneath it. Tributary makes sure those streams get paid.

Released under the Open Royalty License. Paid out through Tributary.

Tributary would run on the same model it proposes. It handles the hard part, tracking and payouts to every creator in the chain, and takes a small cut only when creators get paid. We'd literally dogfood our own product.

If you maintain an open source project, or you'd use something like this, I want to hear from you.

Imagine a world where the SaaS subscription dies and gets replaced by something better: you build your own app, and the people whose work made it possible get paid every time it earns.

That's not charity. That's an economy.

## Who wins the era of personal software

The winners of the next decade won't be the companies with the most features. Features are free now.

They'll be the people and companies who own their tools, the platforms that make building effortless, and, if we get this right, the open source creators whose work becomes the bedrock everyone builds on.

If you're paying for software you could build, start building. If your app is built on someone's open source project, give something back: sponsor them, pay for a license, or share revenue once you're making money. And if you're selling SaaS, ask yourself honestly: what do I have that a determined user can't rebuild by Monday?

The era of personal software is here. The only question is whether you're building it or being replaced by it.

What's the first app you're going to stop paying for? Reply and tell me.
