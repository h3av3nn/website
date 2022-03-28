import ArrowLink from '@/components/links/ArrowLink'

export default function Footer() {
return (
<footer className="text-center lg:text-left">
    <div className="text-gray-400 text-center text-bold p-4">
    This website is open-source on &nbsp;
    <ArrowLink className="text-gray-500" href="https://github.com/hvnejs/website">Github</ArrowLink>
    </div>
</footer>
    )
}
