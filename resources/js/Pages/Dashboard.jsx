import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vezérlőpult</h2>}
        >
            <Head title="Vezérlőpult" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg text-center">
                        <div className="p-6 text-gray-900">Üdv {props.auth.user.name}, be vagy lépve!</div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                    <a href={route('profile.edit')} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img src="pictures/profile.png" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                className="h-full w-full object-cover object-center group-hover:opacity-75" />
                        </div>
                    </a>

                </div>
            </div>

        </AuthenticatedLayout>
    );
}
