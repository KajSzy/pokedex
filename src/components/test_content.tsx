/* eslint-disable react/no-unescaped-entities */
import * as React from 'react'
import FocusableCard from './FocusableCard'

const TestContent = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="max-w-screen-xl" ref={ref}>
      <FocusableCard>
        <h1 className="text-2xl my-4 font-bold">
          A tremor in the Force. The last time I felt it was in the presence of
          my old master.
        </h1>
        <p>
          Obi-Wan is here. The Force is with him. Look, I ain't in this for your
          revolution, and I'm not in it for you, Princess. I expect to be well
          paid. I'm in it for the money. I'm trying not to, kid. I suggest you
          try it again, Luke. This time, let go your conscious self and act on
          instinct.
        </p>
        <p>
          He is here. The plans you refer to will soon be back in our hands. Oh
          God, my uncle. How am I ever gonna explain this? Kid, I've flown from
          one side of this galaxy to the other.{' '}
          <strong>
            {' '}
            I've seen a lot of strange stuff, but I've never seen anything to
            make me believe there's one all-powerful Force controlling
            everything.
          </strong>{' '}
          <em>
            {' '}
            There's no mystical energy field that controls my destiny.
          </em>{' '}
          It's all a lot of simple tricks and nonsense.
        </p>
      </FocusableCard>

      <FocusableCard>
        <h1 className="text-2xl my-4 font-bold">
          Don't underestimate the Force.
        </h1>
        <p>
          I can't get involved! I've got work to do! It's not that I like the
          Empire, I hate it, but there's nothing I can do about it right now.
          It's such a long way from here. Red Five standing by. You don't
          believe in the Force, do you?
        </p>
        <ol>
          <li>Your eyes can deceive you. Don't trust them.</li>
          <li>
            The more you tighten your grip, Tarkin, the more star systems will
            slip through your fingers.
          </li>
          <li>Your eyes can deceive you. Don't trust them.</li>
        </ol>
      </FocusableCard>
      <FocusableCard>
        <h1 className="text-2xl my-4 font-bold">I'm trying not to, kid.</h1>
        <p>
          He is here. Don't be too proud of this technological terror you've
          constructed. The ability to destroy a planet is insignificant next to
          the power of the Force. I don't know what you're talking about. I am a
          member of the Imperial Senate on a diplomatic mission to Alderaan--
        </p>
        <ul>
          <li>What!?</li>
          <li>
            But with the blast shield down, I can't even see! How am I supposed
            to fight?
          </li>
          <li>
            Look, I can take you as far as Anchorhead. You can get a transport
            there to Mos Eisley or wherever you're going.
          </li>
        </ul>

        <p>
          I want to come with you to Alderaan. There's nothing for me here now.
          I want to learn the ways of the Force and be a Jedi, like my father
          before me. In my experience, there is no such thing as luck. She must
          have hidden the plans in the escape pod. Send a detachment down to
          retrieve them, and see to it personally, Commander. There'll be no one
          to stop us this time!
        </p>
        <p>
          Hokey religions and ancient weapons are no match for a good blaster at
          your side, kid. What?! I call it luck. In my experience, there is no
          such thing as luck. I need your help, Luke. She needs your help. I'm
          getting too old for this sort of thing.
        </p>
        <p>
          Red Five standing by. I need your help, Luke. She needs your help. I'm
          getting too old for this sort of thing. I find your lack of faith
          disturbing. Don't be too proud of this technological terror you've
          constructed. The ability to destroy a planet is insignificant next to
          the power of the Force.
        </p>
        <p>
          Hey, Luke! May the Force be with you. Dantooine. They're on Dantooine.
          I suggest you try it again, Luke. This time, let go your conscious
          self and act on instinct. I need your help, Luke. She needs your help.
          I'm getting too old for this sort of thing.
        </p>
        <p>
          Hey, Luke! May the Force be with you. I have traced the Rebel spies to
          her. Now she is my only link to finding their secret base. What?! I
          call it luck. In my experience, there is no such thing as luck.
        </p>
      </FocusableCard>
      <FocusableCard>
        <h1 className="text-2xl my-4 font-bold">
          I want to come with you to Alderaan. There's nothing for me here now.
          I want to learn the ways of the Force and be a Jedi, like my father
          before me.
        </h1>
        <p>
          Remember, a Jedi can feel the Force flowing through him. I don't know
          what you're talking about. I am a member of the Imperial Senate on a
          diplomatic mission to Alderaan-- I want to come with you to Alderaan.
          There's nothing for me here now. I want to learn the ways of the Force
          and be a Jedi, like my father before me.
        </p>
        <p>
          I'm surprised you had the courage to take the responsibility yourself.
          As you wish. I suggest you try it again, Luke. This time, let go your
          conscious self and act on instinct. <strong> He is here.</strong>{' '}
          <em> Leave that to me.</em> Send a distress signal, and inform the
          Senate that all on board were killed.
        </p>
      </FocusableCard>
      <FocusableCard>
        <h1 className="text-2xl my-4 font-bold">
          Look, I ain't in this for your revolution, and I'm not in it for you,
          Princess. I expect to be well paid. I'm in it for the money.
        </h1>
        <p>
          Kid, I've flown from one side of this galaxy to the other. I've seen a
          lot of strange stuff, but I've never seen anything to make me believe
          there's one all-powerful Force controlling everything. There's no
          mystical energy field that controls my destiny. It's all a lot of
          simple tricks and nonsense. Kid, I've flown from one side of this
          galaxy to the other. I've seen a lot of strange stuff, but I've never
          seen anything to make me believe there's one all-powerful Force
          controlling everything. There's no mystical energy field that controls
          my destiny. It's all a lot of simple tricks and nonsense.
        </p>
        <ol>
          <li>
            Don't act so surprised, Your Highness. You weren't on any mercy
            mission this time. Several transmissions were beamed to this ship by
            Rebel spies. I want to know what happened to the plans they sent
            you.
          </li>
          <li>
            I suggest you try it again, Luke. This time, let go your conscious
            self and act on instinct.
          </li>
          <li>The plans you refer to will soon be back in our hands.</li>
        </ol>
      </FocusableCard>
      <FocusableCard>
        <h1 className="text-2xl my-4 font-bold">
          What good is a reward if you ain't around to use it? Besides,
          attacking that battle station ain't my idea of courage. It's more
          like…suicide.
        </h1>
        <p>
          Red Five standing by. Leave that to me. Send a distress signal, and
          inform the Senate that all on board were killed. Leave that to me.
          Send a distress signal, and inform the Senate that all on board were
          killed.
        </p>
        <ul>
          <li>Red Five standing by.</li>
          <li>Ye-ha!</li>
          <li>Ye-ha!</li>
        </ul>

        <p>
          The more you tighten your grip, Tarkin, the more star systems will
          slip through your fingers. In my experience, there is no such thing as
          luck. Obi-Wan is here. The Force is with him. I can't get involved!
          I've got work to do! It's not that I like the Empire, I hate it, but
          there's nothing I can do about it right now. It's such a long way from
          here.
        </p>
        <p>
          You are a part of the Rebel Alliance and a traitor! Take her away! A
          tremor in the Force. The last time I felt it was in the presence of my
          old master. I'm trying not to, kid. You mean it controls your actions?
        </p>
        <p>
          I want to come with you to Alderaan. There's nothing for me here now.
          I want to learn the ways of the Force and be a Jedi, like my father
          before me. I can't get involved! I've got work to do! It's not that I
          like the Empire, I hate it, but there's nothing I can do about it
          right now. It's such a long way from here.
        </p>
        <p>
          What!? You're all clear, kid. Let's blow this thing and go home! I
          call it luck. Kid, I've flown from one side of this galaxy to the
          other. I've seen a lot of strange stuff, but I've never seen anything
          to make me believe there's one all-powerful Force controlling
          everything. There's no mystical energy field that controls my destiny.
          It's all a lot of simple tricks and nonsense.
        </p>
        <p>
          The plans you refer to will soon be back in our hands. I call it luck.
          You don't believe in the Force, do you? Obi-Wan is here. The Force is
          with him. Don't underestimate the Force. Look, I ain't in this for
          your revolution, and I'm not in it for you, Princess. I expect to be
          well paid. I'm in it for the money.
        </p>
        <p>
          I'm surprised you had the courage to take the responsibility yourself.
          I suggest you try it again, Luke. This time, let go your conscious
          self and act on instinct. Still, she's got a lot of spirit. I don't
          know, what do you think?
        </p>
      </FocusableCard>
      <FocusableCard>
        <h1 className="text-2xl my-4 font-bold">
          I want to come with you to Alderaan. There's nothing for me here now.
          I want to learn the ways of the Force and be a Jedi, like my father
          before me.
        </h1>
        <p>
          Remember, a Jedi can feel the Force flowing through him. I don't know
          what you're talking about. I am a member of the Imperial Senate on a
          diplomatic mission to Alderaan-- I want to come with you to Alderaan.
          There's nothing for me here now. I want to learn the ways of the Force
          and be a Jedi, like my father before me.
        </p>
        <p>
          I'm surprised you had the courage to take the responsibility yourself.
          As you wish. I suggest you try it again, Luke. This time, let go your
          conscious self and act on instinct. <strong> He is here.</strong>{' '}
          <em> Leave that to me.</em> Send a distress signal, and inform the
          Senate that all on board were killed.
        </p>
      </FocusableCard>
      <FocusableCard>
        <h1 className="text-2xl my-4 font-bold">
          Look, I ain't in this for your revolution, and I'm not in it for you,
          Princess. I expect to be well paid. I'm in it for the money.
        </h1>
        <p>
          Kid, I've flown from one side of this galaxy to the other. I've seen a
          lot of strange stuff, but I've never seen anything to make me believe
          there's one all-powerful Force controlling everything. There's no
          mystical energy field that controls my destiny. It's all a lot of
          simple tricks and nonsense. Kid, I've flown from one side of this
          galaxy to the other. I've seen a lot of strange stuff, but I've never
          seen anything to make me believe there's one all-powerful Force
          controlling everything. There's no mystical energy field that controls
          my destiny. It's all a lot of simple tricks and nonsense.
        </p>
        <ol>
          <li>
            Don't act so surprised, Your Highness. You weren't on any mercy
            mission this time. Several transmissions were beamed to this ship by
            Rebel spies. I want to know what happened to the plans they sent
            you.
          </li>
          <li>
            I suggest you try it again, Luke. This time, let go your conscious
            self and act on instinct.
          </li>
          <li>The plans you refer to will soon be back in our hands.</li>
        </ol>
      </FocusableCard>
      <FocusableCard>
        <h1 className="text-2xl my-4 font-bold">
          What good is a reward if you ain't around to use it? Besides,
          attacking that battle station ain't my idea of courage. It's more
          like…suicide.
        </h1>
        <p>
          Red Five standing by. Leave that to me. Send a distress signal, and
          inform the Senate that all on board were killed. Leave that to me.
          Send a distress signal, and inform the Senate that all on board were
          killed.
        </p>
        <ul>
          <li>Red Five standing by.</li>
          <li>Ye-ha!</li>
          <li>Ye-ha!</li>
        </ul>

        <p>
          The more you tighten your grip, Tarkin, the more star systems will
          slip through your fingers. In my experience, there is no such thing as
          luck. Obi-Wan is here. The Force is with him. I can't get involved!
          I've got work to do! It's not that I like the Empire, I hate it, but
          there's nothing I can do about it right now. It's such a long way from
          here.
        </p>
        <p>
          You are a part of the Rebel Alliance and a traitor! Take her away! A
          tremor in the Force. The last time I felt it was in the presence of my
          old master. I'm trying not to, kid. You mean it controls your actions?
        </p>
        <p>
          I want to come with you to Alderaan. There's nothing for me here now.
          I want to learn the ways of the Force and be a Jedi, like my father
          before me. I can't get involved! I've got work to do! It's not that I
          like the Empire, I hate it, but there's nothing I can do about it
          right now. It's such a long way from here.
        </p>
        <p>
          What!? You're all clear, kid. Let's blow this thing and go home! I
          call it luck. Kid, I've flown from one side of this galaxy to the
          other. I've seen a lot of strange stuff, but I've never seen anything
          to make me believe there's one all-powerful Force controlling
          everything. There's no mystical energy field that controls my destiny.
          It's all a lot of simple tricks and nonsense.
        </p>
        <p>
          The plans you refer to will soon be back in our hands. I call it luck.
          You don't believe in the Force, do you? Obi-Wan is here. The Force is
          with him. Don't underestimate the Force. Look, I ain't in this for
          your revolution, and I'm not in it for you, Princess. I expect to be
          well paid. I'm in it for the money.
        </p>
        <p>
          She must have hidden the plans in the escape pod. Send a detachment
          down to retrieve them, and see to it personally, Commander. There'll
          be no one to stop us this time! I call it luck. I call it luck. Hokey
          religions and ancient weapons are no match for a good blaster at your
          side, kid.
        </p>
      </FocusableCard>
    </div>
  )
})

export default TestContent
