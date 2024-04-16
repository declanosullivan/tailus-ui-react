import {Meta, type StoryObj} from "@storybook/react";
import ToggleGroup from "../toggle_group/ToggleGroup.tsx";
import {Cross2Icon} from "@radix-ui/react-icons";
import Toggle from "../toggle/Toggle.tsx";
import Button from "../button/Button.tsx";
import Dialog from "./Dialog.tsx";
import { DialogProps } from "@tailus/themer";

const Feedback = (args:DialogProps) => (
  <Dialog.Root>
    <div className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-300">
      <span>Was this useful ? </span>
      <ToggleGroup.Root type="single" defaultValue="" aria-label="User appreciation">
        <Dialog.Trigger>
          <ToggleGroup.Item value="like-2" aria-label="I like it">
            <ToggleGroup.IconBefore>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
            </ToggleGroup.IconBefore>
            <ToggleGroup.IconAfter>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"/>
              </svg>
            </ToggleGroup.IconAfter>
          </ToggleGroup.Item>
        </Dialog.Trigger>
        <Dialog.Trigger>
          <ToggleGroup.Item value="dislike-2" aria-label="I like it">
            <ToggleGroup.IconBefore>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                />
              </svg>
            </ToggleGroup.IconBefore>
            <ToggleGroup.IconAfter>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   fill="currentColor">
                <path
                  d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z"/>
              </svg>
            </ToggleGroup.IconAfter>
          </ToggleGroup.Item>
        </Dialog.Trigger>
      </ToggleGroup.Root>
    </div>
    <Dialog.Portal>
      <Dialog.Overlay/>
      <Dialog.Content className="max-w-[20rem]" fancy={args.fancy} mixed={args.mixed}>
        <Dialog.Title>What is the reason for your feedback?</Dialog.Title>
        <Dialog.Description className="mt-2">What do you think of Tailus UI ?</Dialog.Description>

        <Dialog.Actions>
          <Dialog.Close asChild>
            <Button.Root size="sm">
              <Button.Label>Submit</Button.Label>
            </Button.Root>
          </Dialog.Close>
        </Dialog.Actions>
        <Dialog.Close asChild>
          <Dialog.CloseButton
            aria-label="Dismiss dialog"
            variant="ghost"
            intent="gray"
            size="sm"
          >
            <Cross2Icon aria-hidden/>
          </Dialog.CloseButton>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

const Bookmark = (args:DialogProps) => (
  <Dialog.Root>
    <Dialog.Trigger>
      <Toggle.Root value="bookmark" aria-label="Bookmark">
        <Toggle.IconBefore>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/>
          </svg>
        </Toggle.IconBefore>
        <Toggle.IconAfter>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clipRule="evenodd"/>
          </svg>
        </Toggle.IconAfter>
      </Toggle.Root>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay/>
      <Dialog.Content className="max-w-[20rem]" fancy={args.fancy} mixed={args.mixed}>
        <Dialog.Title>Sign in to bookmark</Dialog.Title>
        <Dialog.Description className="mt-2">You need to be signed in to save your frequently used components.</Dialog.Description>

        <Dialog.Actions>
          <Dialog.Close asChild>
            <Button.Root variant="outlined" size="sm" intent="gray">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button.Root size="sm">
              <Button.Label>Sign In</Button.Label>
            </Button.Root>
          </Dialog.Close>
        </Dialog.Actions>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

const UserFeedback = (args:DialogProps) => (
  <Dialog.Root>
    <div
      className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 p-4 text-gray-700 dark:border-gray-900 dark:text-gray-300">
      <span>Was this useful ? </span>
      <ToggleGroup.Root variant={"highlight"} className={"!justify-start !gap-1"} type="single" defaultValue=""
                        aria-label="User feedback">
        <Dialog.Trigger>
          <ToggleGroup.Item value="love" aria-label="I love it">
            <ToggleGroup.Icon>
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"
                  fill="currentColor"
                />
                <path
                  d="M11.315 10.014C11.4099 9.99164 11.5093 9.99754 11.6009 10.031C11.6926 10.0644 11.7724 10.1239 11.8306 10.2021C11.8889 10.2803 11.923 10.3738 11.9287 10.4712C11.9345 10.5685 11.9116 10.6655 11.863 10.75C11.4681 11.4343 10.8999 12.0026 10.2157 12.3976C9.53137 12.7926 8.75511 13.0003 7.965 13C7.1749 13.0003 6.39864 12.7926 5.71434 12.3976C5.03005 12.0026 4.46188 11.4343 4.067 10.75C4.01838 10.6655 3.99553 10.5685 4.00128 10.4712C4.00703 10.3738 4.04113 10.2803 4.09937 10.2021C4.15761 10.1239 4.23745 10.0644 4.32907 10.031C4.42069 9.99754 4.52008 9.99164 4.615 10.014H4.62L4.637 10.019L4.704 10.034L4.956 10.089C5.171 10.135 5.471 10.197 5.813 10.258C6.506 10.382 7.335 10.5 7.965 10.5C8.595 10.5 9.425 10.382 10.117 10.258C10.4882 10.1912 10.858 10.1165 11.226 10.034L11.293 10.019L11.31 10.015L11.315 10.013V10.014ZM4.756 4.56599C5.519 3.14199 8.776 4.44599 5.708 7.99999C1.212 6.40399 3.358 3.70199 4.756 4.56599ZM11.244 4.56599C12.642 3.70199 14.788 6.40399 10.292 7.99999C7.225 4.44599 10.482 3.14199 11.244 4.56599Z"
                  fill="currentColor"
                />
              </svg>
            </ToggleGroup.Icon>
          </ToggleGroup.Item>
        </Dialog.Trigger>
        <Dialog.Trigger>
          <ToggleGroup.Item value="like" aria-label="I like it">
            <ToggleGroup.Icon>
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.25 5.75C4.44891 5.75 4.63968 5.67098 4.78033 5.53033C4.92098 5.38968 5 5.19891 5 5C5 4.80109 4.92098 4.61032 4.78033 4.46967C4.63968 4.32902 4.44891 4.25 4.25 4.25C4.05109 4.25 3.86032 4.32902 3.71967 4.46967C3.57902 4.61032 3.5 4.80109 3.5 5C3.5 5.19891 3.57902 5.38968 3.71967 5.53033C3.86032 5.67098 4.05109 5.75 4.25 5.75ZM4.136 7.667C4.0924 7.61738 4.0394 7.5769 3.98007 7.54788C3.92073 7.51886 3.85623 7.50189 3.7903 7.49794C3.72437 7.49399 3.65831 7.50314 3.59593 7.52487C3.53356 7.5466 3.4761 7.58047 3.42689 7.62453C3.37768 7.66859 3.33769 7.72196 3.30922 7.78156C3.28076 7.84116 3.26438 7.90582 3.26105 7.97178C3.25771 8.03775 3.26747 8.10372 3.28978 8.16589C3.31208 8.22807 3.34649 8.2852 3.391 8.334C3.7191 8.7013 4.12116 8.99506 4.5708 9.19602C5.02044 9.39697 5.5075 9.50056 6 9.5C6.4925 9.50056 6.97956 9.39697 7.4292 9.19602C7.87884 8.99506 8.2809 8.7013 8.609 8.334C8.696 8.23499 8.74039 8.10563 8.73251 7.97406C8.72463 7.84249 8.66512 7.71936 8.56692 7.63144C8.46872 7.54352 8.33978 7.49793 8.20814 7.50459C8.07651 7.51125 7.95282 7.56962 7.864 7.667C7.62973 7.92959 7.3425 8.13958 7.02122 8.28315C6.69994 8.42673 6.3519 8.50063 6 8.5C5.26 8.5 4.595 8.179 4.136 7.667ZM8.5 5C8.5 5.19891 8.42098 5.38968 8.28033 5.53033C8.13968 5.67098 7.94891 5.75 7.75 5.75C7.55109 5.75 7.36032 5.67098 7.21967 5.53033C7.07902 5.38968 7 5.19891 7 5C7 4.80109 7.07902 4.61032 7.21967 4.46967C7.36032 4.32902 7.55109 4.25 7.75 4.25C7.94891 4.25 8.13968 4.32902 8.28033 4.46967C8.42098 4.61032 8.5 4.80109 8.5 5ZM12 6C12 5.21207 11.8448 4.43185 11.5433 3.7039C11.2417 2.97595 10.7998 2.31451 10.2426 1.75736C9.68549 1.20021 9.02405 0.758251 8.2961 0.456723C7.56815 0.155195 6.78793 0 6 0C5.21207 0 4.43185 0.155195 3.7039 0.456723C2.97595 0.758251 2.31451 1.20021 1.75736 1.75736C1.20021 2.31451 0.758251 2.97595 0.456723 3.7039C0.155195 4.43185 -1.17411e-08 5.21207 0 6C2.37122e-08 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6ZM1 6C1 4.67392 1.52678 3.40215 2.46447 2.46447C3.40215 1.52678 4.67392 1 6 1C7.32608 1 8.59785 1.52678 9.53553 2.46447C10.4732 3.40215 11 4.67392 11 6C11 7.32608 10.4732 8.59785 9.53553 9.53553C8.59785 10.4732 7.32608 11 6 11C4.67392 11 3.40215 10.4732 2.46447 9.53553C1.52678 8.59785 1 7.32608 1 6Z"
                  fill="currentColor"
                />
              </svg>
            </ToggleGroup.Icon>
          </ToggleGroup.Item>
        </Dialog.Trigger>
        <Dialog.Trigger>
          <ToggleGroup.Item value="neutral" aria-label="Neutral">
            <ToggleGroup.Icon>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 6.751C7.16706 6.74627 7.33337 6.7751 7.4891 6.83576C7.64483 6.89643 7.78681 6.98771 7.90665 7.10421C8.02648 7.2207 8.12174 7.36004 8.18679 7.51399C8.25184 7.66794 8.28535 7.83337 8.28535 8.0005C8.28535 8.16763 8.25184 8.33306 8.18679 8.48701C8.12174 8.64096 8.02648 8.7803 7.90665 8.8968C7.78681 9.01329 7.64483 9.10457 7.4891 9.16524C7.33337 9.2259 7.16706 9.25473 7 9.25C6.66848 9.25 6.35054 9.1183 6.11612 8.88388C5.8817 8.64946 5.75 8.33152 5.75 8C5.75 7.66848 5.8817 7.35054 6.11612 7.11612C6.35054 6.8817 6.66848 6.75 7 6.75V6.751ZM13 6.751C13.1671 6.74627 13.3334 6.7751 13.4891 6.83576C13.6448 6.89643 13.7868 6.98771 13.9066 7.10421C14.0265 7.2207 14.1217 7.36004 14.1868 7.51399C14.2518 7.66794 14.2854 7.83337 14.2854 8.0005C14.2854 8.16763 14.2518 8.33306 14.1868 8.48701C14.1217 8.64096 14.0265 8.7803 13.9066 8.8968C13.7868 9.01329 13.6448 9.10457 13.4891 9.16524C13.3334 9.2259 13.1671 9.25473 13 9.25C12.6747 9.2408 12.3659 9.10512 12.1391 8.87179C11.9122 8.63847 11.7854 8.3259 11.7854 8.0005C11.7854 7.6751 11.9122 7.36253 12.1391 7.1292C12.3659 6.89588 12.6747 6.7602 13 6.751ZM6.25 13C6.05109 13 5.86032 13.079 5.71967 13.2197C5.57902 13.3603 5.5 13.5511 5.5 13.75C5.5 13.9489 5.57902 14.1397 5.71967 14.2803C5.86032 14.421 6.05109 14.5 6.25 14.5H13.75C13.9489 14.5 14.1397 14.421 14.2803 14.2803C14.421 14.1397 14.5 13.9489 14.5 13.75C14.5 13.5511 14.421 13.3603 14.2803 13.2197C14.1397 13.079 13.9489 13 13.75 13H6.25ZM0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10ZM10 1.5C7.74566 1.5 5.58365 2.39553 3.98959 3.98959C2.39553 5.58365 1.5 7.74566 1.5 10C1.5 12.2543 2.39553 14.4163 3.98959 16.0104C5.58365 17.6045 7.74566 18.5 10 18.5C12.2543 18.5 14.4163 17.6045 16.0104 16.0104C17.6045 14.4163 18.5 12.2543 18.5 10C18.5 7.74566 17.6045 5.58365 16.0104 3.98959C14.4163 2.39553 12.2543 1.5 10 1.5Z"
                  fill="currentColor"
                />
              </svg>
            </ToggleGroup.Icon>
          </ToggleGroup.Item>
        </Dialog.Trigger>
        <Dialog.Trigger>
          <ToggleGroup.Item value="dislike" aria-label="I dislike it">
            <ToggleGroup.Icon>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 6.751C7.16706 6.74627 7.33337 6.7751 7.4891 6.83576C7.64483 6.89643 7.78681 6.98771 7.90665 7.10421C8.02648 7.2207 8.12174 7.36004 8.18679 7.51399C8.25184 7.66794 8.28535 7.83337 8.28535 8.0005C8.28535 8.16763 8.25184 8.33306 8.18679 8.48701C8.12174 8.64096 8.02648 8.7803 7.90665 8.8968C7.78681 9.01329 7.64483 9.10457 7.4891 9.16524C7.33337 9.2259 7.16706 9.25473 7 9.25C6.66848 9.25 6.35054 9.1183 6.11612 8.88388C5.8817 8.64946 5.75 8.33152 5.75 8C5.75 7.66848 5.8817 7.35054 6.11612 7.11612C6.35054 6.8817 6.66848 6.75 7 6.75V6.751ZM13 6.751C13.1671 6.74627 13.3334 6.7751 13.4891 6.83576C13.6448 6.89643 13.7868 6.98771 13.9066 7.10421C14.0265 7.2207 14.1217 7.36004 14.1868 7.51399C14.2518 7.66794 14.2854 7.83337 14.2854 8.0005C14.2854 8.16763 14.2518 8.33306 14.1868 8.48701C14.1217 8.64096 14.0265 8.7803 13.9066 8.8968C13.7868 9.01329 13.6448 9.10457 13.4891 9.16524C13.3334 9.2259 13.1671 9.25473 13 9.25C12.6747 9.2408 12.3659 9.10512 12.1391 8.87179C11.9122 8.63847 11.7854 8.3259 11.7854 8.0005C11.7854 7.6751 11.9122 7.36253 12.1391 7.1292C12.3659 6.89588 12.6747 6.7602 13 6.751ZM6.25 13C6.05109 13 5.86032 13.079 5.71967 13.2197C5.57902 13.3603 5.5 13.5511 5.5 13.75C5.5 13.9489 5.57902 14.1397 5.71967 14.2803C5.86032 14.421 6.05109 14.5 6.25 14.5H13.75C13.9489 14.5 14.1397 14.421 14.2803 14.2803C14.421 14.1397 14.5 13.9489 14.5 13.75C14.5 13.5511 14.421 13.3603 14.2803 13.2197C14.1397 13.079 13.9489 13 13.75 13H6.25ZM0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10ZM10 1.5C7.74566 1.5 5.58365 2.39553 3.98959 3.98959C2.39553 5.58365 1.5 7.74566 1.5 10C1.5 12.2543 2.39553 14.4163 3.98959 16.0104C5.58365 17.6045 7.74566 18.5 10 18.5C12.2543 18.5 14.4163 17.6045 16.0104 16.0104C17.6045 14.4163 18.5 12.2543 18.5 10C18.5 7.74566 17.6045 5.58365 16.0104 3.98959C14.4163 2.39553 12.2543 1.5 10 1.5Z"
                  fill="currentColor"
                />
              </svg>
            </ToggleGroup.Icon>
          </ToggleGroup.Item>
        </Dialog.Trigger>
        <Dialog.Trigger>
          <ToggleGroup.Item value="hate" aria-label="I hate it">
            <ToggleGroup.Icon>
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 5C5.00013 5.12468 4.96917 5.24742 4.90992 5.35713C4.85068 5.46683 4.76502 5.56004 4.6607 5.62831C4.55637 5.69659 4.43667 5.73778 4.31243 5.74815C4.18818 5.75853 4.06331 5.73777 3.9491 5.68775C3.83489 5.63773 3.73496 5.56002 3.65834 5.46167C3.58172 5.36331 3.53083 5.2474 3.51027 5.12443C3.48971 5.00146 3.50013 4.8753 3.54059 4.75737C3.58105 4.63943 3.65028 4.53345 3.742 4.449L3.146 3.854C3.05211 3.76011 2.99937 3.63278 2.99937 3.5C2.99937 3.36722 3.05211 3.23989 3.146 3.146C3.23989 3.05211 3.36722 2.99937 3.5 2.99937C3.63278 2.99937 3.76011 3.05211 3.854 3.146L4.854 4.146C4.92828 4.22035 4.97724 4.31621 4.99394 4.41997C5.01063 4.52372 4.99421 4.63011 4.947 4.724C4.98195 4.81182 4.99993 4.90548 5 5ZM7.75 5.75C7.90081 5.74983 8.04806 5.70421 8.17255 5.61908C8.29703 5.53395 8.39296 5.41327 8.44781 5.27279C8.50266 5.13232 8.51389 4.97856 8.48003 4.83161C8.44617 4.68465 8.36879 4.55131 8.258 4.449L8.854 3.854C8.94789 3.76011 9.00063 3.63278 9.00063 3.5C9.00063 3.36722 8.94789 3.23989 8.854 3.146C8.76011 3.05211 8.63278 2.99937 8.5 2.99937C8.36722 2.99937 8.23989 3.05211 8.146 3.146L7.146 4.146C7.07172 4.22035 7.02276 4.31621 7.00606 4.41997C6.98937 4.52372 7.00579 4.63011 7.053 4.724C7.00799 4.83772 6.99148 4.96072 7.0049 5.08228C7.01832 5.20385 7.06126 5.32029 7.12998 5.42145C7.19871 5.52262 7.29113 5.60544 7.3992 5.66271C7.50727 5.71997 7.6277 5.74994 7.75 5.75ZM3.43 9.373C3.47898 9.41673 3.5361 9.45039 3.59809 9.47205C3.66008 9.4937 3.72573 9.50294 3.79128 9.49922C3.85684 9.49551 3.92103 9.47892 3.98018 9.4504C4.03932 9.42188 4.09227 9.38199 4.136 9.333C4.37027 9.07041 4.6575 8.86042 4.97878 8.71685C5.30006 8.57327 5.6481 8.49937 6 8.5C6.74 8.5 7.405 8.821 7.863 9.334C7.95158 9.43279 8.07578 9.49235 8.20828 9.49957C8.34077 9.50679 8.47071 9.46108 8.5695 9.3725C8.66829 9.28392 8.72785 9.15972 8.73507 9.02722C8.74229 8.89473 8.69658 8.76479 8.608 8.666C8.28001 8.29883 7.87811 8.00514 7.42865 7.80419C6.97919 7.60324 6.49233 7.49958 6 7.5C5.5075 7.49944 5.02044 7.60303 4.5708 7.80398C4.12116 8.00494 3.7191 8.2987 3.391 8.666C3.34712 8.71501 3.31333 8.77219 3.29159 8.83427C3.26984 8.89636 3.26056 8.96212 3.26428 9.0278C3.26799 9.09348 3.28463 9.15778 3.31324 9.21701C3.34185 9.27625 3.38187 9.32926 3.431 9.373H3.43ZM6 0C6.78793 -1.17411e-08 7.56815 0.155195 8.2961 0.456723C9.02405 0.758251 9.68549 1.20021 10.2426 1.75736C10.7998 2.31451 11.2417 2.97595 11.5433 3.7039C11.8448 4.43185 12 5.21207 12 6C12 6.78793 11.8448 7.56815 11.5433 8.2961C11.2417 9.02405 10.7998 9.68549 10.2426 10.2426C9.68549 10.7998 9.02405 11.2417 8.2961 11.5433C7.56815 11.8448 6.78793 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 2.37122e-08 6 0ZM6 1C4.67392 1 3.40215 1.52678 2.46447 2.46447C1.52678 3.40215 1 4.67392 1 6C1 7.32608 1.52678 8.59785 2.46447 9.53553C3.40215 10.4732 4.67392 11 6 11C7.32608 11 8.59785 10.4732 9.53553 9.53553C10.4732 8.59785 11 7.32608 11 6C11 4.67392 10.4732 3.40215 9.53553 2.46447C8.59785 1.52678 7.32608 1 6 1Z"
                  fill="currentColor"
                />
              </svg>
            </ToggleGroup.Icon>
          </ToggleGroup.Item>
        </Dialog.Trigger>
      </ToggleGroup.Root>
    </div>
    <Dialog.Portal>
      <Dialog.Overlay/>
      <Dialog.Content className={"max-w-[20rem]"} fancy={args.fancy} mixed={args.mixed}>
        <Dialog.Title>Give us a feedback</Dialog.Title>
        <Dialog.Description className="mt-2 mb-4">What do you think of Tailus UI ?</Dialog.Description>

        <ToggleGroup.Root variant={"highlight"} className={"!justify-start"} type="single" defaultValue=""
                          aria-label="User feedback">
          <ToggleGroup.Item value="love" aria-label="I love it">
            <ToggleGroup.Icon>
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"
                  fill="currentColor"
                />
                <path
                  d="M11.315 10.014C11.4099 9.99164 11.5093 9.99754 11.6009 10.031C11.6926 10.0644 11.7724 10.1239 11.8306 10.2021C11.8889 10.2803 11.923 10.3738 11.9287 10.4712C11.9345 10.5685 11.9116 10.6655 11.863 10.75C11.4681 11.4343 10.8999 12.0026 10.2157 12.3976C9.53137 12.7926 8.75511 13.0003 7.965 13C7.1749 13.0003 6.39864 12.7926 5.71434 12.3976C5.03005 12.0026 4.46188 11.4343 4.067 10.75C4.01838 10.6655 3.99553 10.5685 4.00128 10.4712C4.00703 10.3738 4.04113 10.2803 4.09937 10.2021C4.15761 10.1239 4.23745 10.0644 4.32907 10.031C4.42069 9.99754 4.52008 9.99164 4.615 10.014H4.62L4.637 10.019L4.704 10.034L4.956 10.089C5.171 10.135 5.471 10.197 5.813 10.258C6.506 10.382 7.335 10.5 7.965 10.5C8.595 10.5 9.425 10.382 10.117 10.258C10.4882 10.1912 10.858 10.1165 11.226 10.034L11.293 10.019L11.31 10.015L11.315 10.013V10.014ZM4.756 4.56599C5.519 3.14199 8.776 4.44599 5.708 7.99999C1.212 6.40399 3.358 3.70199 4.756 4.56599ZM11.244 4.56599C12.642 3.70199 14.788 6.40399 10.292 7.99999C7.225 4.44599 10.482 3.14199 11.244 4.56599Z"
                  fill="currentColor"
                />
              </svg>
            </ToggleGroup.Icon>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="like" aria-label="I like it">
            <ToggleGroup.Icon>
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.25 5.75C4.44891 5.75 4.63968 5.67098 4.78033 5.53033C4.92098 5.38968 5 5.19891 5 5C5 4.80109 4.92098 4.61032 4.78033 4.46967C4.63968 4.32902 4.44891 4.25 4.25 4.25C4.05109 4.25 3.86032 4.32902 3.71967 4.46967C3.57902 4.61032 3.5 4.80109 3.5 5C3.5 5.19891 3.57902 5.38968 3.71967 5.53033C3.86032 5.67098 4.05109 5.75 4.25 5.75ZM4.136 7.667C4.0924 7.61738 4.0394 7.5769 3.98007 7.54788C3.92073 7.51886 3.85623 7.50189 3.7903 7.49794C3.72437 7.49399 3.65831 7.50314 3.59593 7.52487C3.53356 7.5466 3.4761 7.58047 3.42689 7.62453C3.37768 7.66859 3.33769 7.72196 3.30922 7.78156C3.28076 7.84116 3.26438 7.90582 3.26105 7.97178C3.25771 8.03775 3.26747 8.10372 3.28978 8.16589C3.31208 8.22807 3.34649 8.2852 3.391 8.334C3.7191 8.7013 4.12116 8.99506 4.5708 9.19602C5.02044 9.39697 5.5075 9.50056 6 9.5C6.4925 9.50056 6.97956 9.39697 7.4292 9.19602C7.87884 8.99506 8.2809 8.7013 8.609 8.334C8.696 8.23499 8.74039 8.10563 8.73251 7.97406C8.72463 7.84249 8.66512 7.71936 8.56692 7.63144C8.46872 7.54352 8.33978 7.49793 8.20814 7.50459C8.07651 7.51125 7.95282 7.56962 7.864 7.667C7.62973 7.92959 7.3425 8.13958 7.02122 8.28315C6.69994 8.42673 6.3519 8.50063 6 8.5C5.26 8.5 4.595 8.179 4.136 7.667ZM8.5 5C8.5 5.19891 8.42098 5.38968 8.28033 5.53033C8.13968 5.67098 7.94891 5.75 7.75 5.75C7.55109 5.75 7.36032 5.67098 7.21967 5.53033C7.07902 5.38968 7 5.19891 7 5C7 4.80109 7.07902 4.61032 7.21967 4.46967C7.36032 4.32902 7.55109 4.25 7.75 4.25C7.94891 4.25 8.13968 4.32902 8.28033 4.46967C8.42098 4.61032 8.5 4.80109 8.5 5ZM12 6C12 5.21207 11.8448 4.43185 11.5433 3.7039C11.2417 2.97595 10.7998 2.31451 10.2426 1.75736C9.68549 1.20021 9.02405 0.758251 8.2961 0.456723C7.56815 0.155195 6.78793 0 6 0C5.21207 0 4.43185 0.155195 3.7039 0.456723C2.97595 0.758251 2.31451 1.20021 1.75736 1.75736C1.20021 2.31451 0.758251 2.97595 0.456723 3.7039C0.155195 4.43185 -1.17411e-08 5.21207 0 6C2.37122e-08 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6ZM1 6C1 4.67392 1.52678 3.40215 2.46447 2.46447C3.40215 1.52678 4.67392 1 6 1C7.32608 1 8.59785 1.52678 9.53553 2.46447C10.4732 3.40215 11 4.67392 11 6C11 7.32608 10.4732 8.59785 9.53553 9.53553C8.59785 10.4732 7.32608 11 6 11C4.67392 11 3.40215 10.4732 2.46447 9.53553C1.52678 8.59785 1 7.32608 1 6Z"
                  fill="currentColor"
                />
              </svg>
            </ToggleGroup.Icon>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="neutral" aria-label="Neutral">
            <ToggleGroup.Icon>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 6.751C7.16706 6.74627 7.33337 6.7751 7.4891 6.83576C7.64483 6.89643 7.78681 6.98771 7.90665 7.10421C8.02648 7.2207 8.12174 7.36004 8.18679 7.51399C8.25184 7.66794 8.28535 7.83337 8.28535 8.0005C8.28535 8.16763 8.25184 8.33306 8.18679 8.48701C8.12174 8.64096 8.02648 8.7803 7.90665 8.8968C7.78681 9.01329 7.64483 9.10457 7.4891 9.16524C7.33337 9.2259 7.16706 9.25473 7 9.25C6.66848 9.25 6.35054 9.1183 6.11612 8.88388C5.8817 8.64946 5.75 8.33152 5.75 8C5.75 7.66848 5.8817 7.35054 6.11612 7.11612C6.35054 6.8817 6.66848 6.75 7 6.75V6.751ZM13 6.751C13.1671 6.74627 13.3334 6.7751 13.4891 6.83576C13.6448 6.89643 13.7868 6.98771 13.9066 7.10421C14.0265 7.2207 14.1217 7.36004 14.1868 7.51399C14.2518 7.66794 14.2854 7.83337 14.2854 8.0005C14.2854 8.16763 14.2518 8.33306 14.1868 8.48701C14.1217 8.64096 14.0265 8.7803 13.9066 8.8968C13.7868 9.01329 13.6448 9.10457 13.4891 9.16524C13.3334 9.2259 13.1671 9.25473 13 9.25C12.6747 9.2408 12.3659 9.10512 12.1391 8.87179C11.9122 8.63847 11.7854 8.3259 11.7854 8.0005C11.7854 7.6751 11.9122 7.36253 12.1391 7.1292C12.3659 6.89588 12.6747 6.7602 13 6.751ZM6.25 13C6.05109 13 5.86032 13.079 5.71967 13.2197C5.57902 13.3603 5.5 13.5511 5.5 13.75C5.5 13.9489 5.57902 14.1397 5.71967 14.2803C5.86032 14.421 6.05109 14.5 6.25 14.5H13.75C13.9489 14.5 14.1397 14.421 14.2803 14.2803C14.421 14.1397 14.5 13.9489 14.5 13.75C14.5 13.5511 14.421 13.3603 14.2803 13.2197C14.1397 13.079 13.9489 13 13.75 13H6.25ZM0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10ZM10 1.5C7.74566 1.5 5.58365 2.39553 3.98959 3.98959C2.39553 5.58365 1.5 7.74566 1.5 10C1.5 12.2543 2.39553 14.4163 3.98959 16.0104C5.58365 17.6045 7.74566 18.5 10 18.5C12.2543 18.5 14.4163 17.6045 16.0104 16.0104C17.6045 14.4163 18.5 12.2543 18.5 10C18.5 7.74566 17.6045 5.58365 16.0104 3.98959C14.4163 2.39553 12.2543 1.5 10 1.5Z"
                  fill="currentColor"
                />
              </svg>
            </ToggleGroup.Icon>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="dislike" aria-label="I dislike it">
            <ToggleGroup.Icon>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 6.751C7.16706 6.74627 7.33337 6.7751 7.4891 6.83576C7.64483 6.89643 7.78681 6.98771 7.90665 7.10421C8.02648 7.2207 8.12174 7.36004 8.18679 7.51399C8.25184 7.66794 8.28535 7.83337 8.28535 8.0005C8.28535 8.16763 8.25184 8.33306 8.18679 8.48701C8.12174 8.64096 8.02648 8.7803 7.90665 8.8968C7.78681 9.01329 7.64483 9.10457 7.4891 9.16524C7.33337 9.2259 7.16706 9.25473 7 9.25C6.66848 9.25 6.35054 9.1183 6.11612 8.88388C5.8817 8.64946 5.75 8.33152 5.75 8C5.75 7.66848 5.8817 7.35054 6.11612 7.11612C6.35054 6.8817 6.66848 6.75 7 6.75V6.751ZM13 6.751C13.1671 6.74627 13.3334 6.7751 13.4891 6.83576C13.6448 6.89643 13.7868 6.98771 13.9066 7.10421C14.0265 7.2207 14.1217 7.36004 14.1868 7.51399C14.2518 7.66794 14.2854 7.83337 14.2854 8.0005C14.2854 8.16763 14.2518 8.33306 14.1868 8.48701C14.1217 8.64096 14.0265 8.7803 13.9066 8.8968C13.7868 9.01329 13.6448 9.10457 13.4891 9.16524C13.3334 9.2259 13.1671 9.25473 13 9.25C12.6747 9.2408 12.3659 9.10512 12.1391 8.87179C11.9122 8.63847 11.7854 8.3259 11.7854 8.0005C11.7854 7.6751 11.9122 7.36253 12.1391 7.1292C12.3659 6.89588 12.6747 6.7602 13 6.751ZM6.25 13C6.05109 13 5.86032 13.079 5.71967 13.2197C5.57902 13.3603 5.5 13.5511 5.5 13.75C5.5 13.9489 5.57902 14.1397 5.71967 14.2803C5.86032 14.421 6.05109 14.5 6.25 14.5H13.75C13.9489 14.5 14.1397 14.421 14.2803 14.2803C14.421 14.1397 14.5 13.9489 14.5 13.75C14.5 13.5511 14.421 13.3603 14.2803 13.2197C14.1397 13.079 13.9489 13 13.75 13H6.25ZM0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10ZM10 1.5C7.74566 1.5 5.58365 2.39553 3.98959 3.98959C2.39553 5.58365 1.5 7.74566 1.5 10C1.5 12.2543 2.39553 14.4163 3.98959 16.0104C5.58365 17.6045 7.74566 18.5 10 18.5C12.2543 18.5 14.4163 17.6045 16.0104 16.0104C17.6045 14.4163 18.5 12.2543 18.5 10C18.5 7.74566 17.6045 5.58365 16.0104 3.98959C14.4163 2.39553 12.2543 1.5 10 1.5Z"
                  fill="currentColor"
                />
              </svg>
            </ToggleGroup.Icon>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="hate" aria-label="I hate it">
            <ToggleGroup.Icon>
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 5C5.00013 5.12468 4.96917 5.24742 4.90992 5.35713C4.85068 5.46683 4.76502 5.56004 4.6607 5.62831C4.55637 5.69659 4.43667 5.73778 4.31243 5.74815C4.18818 5.75853 4.06331 5.73777 3.9491 5.68775C3.83489 5.63773 3.73496 5.56002 3.65834 5.46167C3.58172 5.36331 3.53083 5.2474 3.51027 5.12443C3.48971 5.00146 3.50013 4.8753 3.54059 4.75737C3.58105 4.63943 3.65028 4.53345 3.742 4.449L3.146 3.854C3.05211 3.76011 2.99937 3.63278 2.99937 3.5C2.99937 3.36722 3.05211 3.23989 3.146 3.146C3.23989 3.05211 3.36722 2.99937 3.5 2.99937C3.63278 2.99937 3.76011 3.05211 3.854 3.146L4.854 4.146C4.92828 4.22035 4.97724 4.31621 4.99394 4.41997C5.01063 4.52372 4.99421 4.63011 4.947 4.724C4.98195 4.81182 4.99993 4.90548 5 5ZM7.75 5.75C7.90081 5.74983 8.04806 5.70421 8.17255 5.61908C8.29703 5.53395 8.39296 5.41327 8.44781 5.27279C8.50266 5.13232 8.51389 4.97856 8.48003 4.83161C8.44617 4.68465 8.36879 4.55131 8.258 4.449L8.854 3.854C8.94789 3.76011 9.00063 3.63278 9.00063 3.5C9.00063 3.36722 8.94789 3.23989 8.854 3.146C8.76011 3.05211 8.63278 2.99937 8.5 2.99937C8.36722 2.99937 8.23989 3.05211 8.146 3.146L7.146 4.146C7.07172 4.22035 7.02276 4.31621 7.00606 4.41997C6.98937 4.52372 7.00579 4.63011 7.053 4.724C7.00799 4.83772 6.99148 4.96072 7.0049 5.08228C7.01832 5.20385 7.06126 5.32029 7.12998 5.42145C7.19871 5.52262 7.29113 5.60544 7.3992 5.66271C7.50727 5.71997 7.6277 5.74994 7.75 5.75ZM3.43 9.373C3.47898 9.41673 3.5361 9.45039 3.59809 9.47205C3.66008 9.4937 3.72573 9.50294 3.79128 9.49922C3.85684 9.49551 3.92103 9.47892 3.98018 9.4504C4.03932 9.42188 4.09227 9.38199 4.136 9.333C4.37027 9.07041 4.6575 8.86042 4.97878 8.71685C5.30006 8.57327 5.6481 8.49937 6 8.5C6.74 8.5 7.405 8.821 7.863 9.334C7.95158 9.43279 8.07578 9.49235 8.20828 9.49957C8.34077 9.50679 8.47071 9.46108 8.5695 9.3725C8.66829 9.28392 8.72785 9.15972 8.73507 9.02722C8.74229 8.89473 8.69658 8.76479 8.608 8.666C8.28001 8.29883 7.87811 8.00514 7.42865 7.80419C6.97919 7.60324 6.49233 7.49958 6 7.5C5.5075 7.49944 5.02044 7.60303 4.5708 7.80398C4.12116 8.00494 3.7191 8.2987 3.391 8.666C3.34712 8.71501 3.31333 8.77219 3.29159 8.83427C3.26984 8.89636 3.26056 8.96212 3.26428 9.0278C3.26799 9.09348 3.28463 9.15778 3.31324 9.21701C3.34185 9.27625 3.38187 9.32926 3.431 9.373H3.43ZM6 0C6.78793 -1.17411e-08 7.56815 0.155195 8.2961 0.456723C9.02405 0.758251 9.68549 1.20021 10.2426 1.75736C10.7998 2.31451 11.2417 2.97595 11.5433 3.7039C11.8448 4.43185 12 5.21207 12 6C12 6.78793 11.8448 7.56815 11.5433 8.2961C11.2417 9.02405 10.7998 9.68549 10.2426 10.2426C9.68549 10.7998 9.02405 11.2417 8.2961 11.5433C7.56815 11.8448 6.78793 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 2.37122e-08 6 0ZM6 1C4.67392 1 3.40215 1.52678 2.46447 2.46447C1.52678 3.40215 1 4.67392 1 6C1 7.32608 1.52678 8.59785 2.46447 9.53553C3.40215 10.4732 4.67392 11 6 11C7.32608 11 8.59785 10.4732 9.53553 9.53553C10.4732 8.59785 11 7.32608 11 6C11 4.67392 10.4732 3.40215 9.53553 2.46447C8.59785 1.52678 7.32608 1 6 1Z"
                  fill="currentColor"
                />
              </svg>
            </ToggleGroup.Icon>
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <fieldset className="mt-6">
          <label htmlFor="feedback" className="sr-only">
            Feedback
          </label>

          <textarea
            className="h-28 max-h-[7rem] min-h-[7rem] w-full rounded-[--field-border-radius] border border-gray-200 bg-transparent px-4 py-2 text-sm placeholder-gray-500 ring-0 transition duration-300 focus:border-gray-600 focus:outline-none focus:ring-[3px] focus:ring-primary-600/10 focus:ring-offset-white dark:border-[--ui-dark-border-color] dark:text-white dark:focus:border-white/60 dark:focus:ring-primary-900/50 dark:focus:ring-offset-gray-900"
            placeholder="Your feedback"
            name="feedback"
            id="feedback"
          ></textarea>
        </fieldset>
        <Dialog.Actions>
          <Dialog.Close>
            <Button.Root size="sm">
              <Button.Label>Send</Button.Label>
            </Button.Root>
          </Dialog.Close>
        </Dialog.Actions>
        <Dialog.Close asChild>
          <Dialog.CloseButton
            aria-label="Dismiss dialog"
            variant="ghost"
            intent="gray"
            size="sm"
          >
            <Cross2Icon aria-hidden/>
          </Dialog.CloseButton>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

const meta: Meta<DialogProps> = {
  title: "Dialog",
  component : Feedback,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The dialog component theme is a collection of Tailwindcss utilities that can be used to " +
          "create dialogs with a single variant. Dialogs are modal windows that appear in front of app content " +
          "to provide critical information or ask for a decision.",
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    fancy: {
      control: "boolean",
      description: "The fancy style of the alert dialog content border.",
    },
    mixed: {
      control: "boolean",
      description: "The mix of the border and shadow of the alert dialog content.",
    },
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const FeedbackExample: Story = {
  name: "Feedback Dialog",
  args: {
    fancy: true,
    mixed: false,
  },
  render:Feedback
}

export const BookmarkExample: Story = {
  ...FeedbackExample,
  name: "Bookmark Dialog",
  render:Bookmark
}

export const UserFeedbackExample: Story = {
  ...FeedbackExample,
  name: "User Feedback Dialog",
  render:UserFeedback
}